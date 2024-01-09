const WishModel = require('../models/wishModel')
const mongoose = require('mongoose')

const WishListService = async (userId) => {
  try {
    const id = new mongoose.Types.ObjectId(userId)

    let data = await WishModel.aggregate([
      {$match:{userID:id}},
      {$lookup:{from:'products', localField:'productID', foreignField:'_id', as:'product', pipeline:[
        {$project:{_id:1, title:1, price:1, discountPrice:1, image:1}}
      ]}}
    ])
    return { status: "success", data: data[0] };
  }
  catch (err) {
    return { status: "failed", message:err.message };
  }
}
// Complete
const AddWishListService = async (userId, productId) => {
   
  try {
    const user = new mongoose.Types.ObjectId(userId)
    const product = new mongoose.Types.ObjectId(productId)

    let data = await WishModel.updateOne(
      {userID:user},
      {$push:{productID:product}},  // {$cond:{if:{'$productID':{$ne:product}}, then:{$push:{productID:product}}}},
      { upsert: true }
    );
    return {status: "success", data:data};
  }
  catch (err) {
    console.log(err)
    return err;
  }
}

const RemoveWishListService = async (userId, productId) => {
  try {
    const user = new mongoose.Types.ObjectId(userId)
    const product = new mongoose.Types.ObjectId(productId)

    let data = await WishModel.updateOne(
      {userID:user},
      {$pull:{productID:product}}
    );
    return {status: "success", data:data};
  }
  catch (err) {
    console.log(err)
    return err;
  }
};

module.exports = {
  WishListService,
  AddWishListService,
  RemoveWishListService,
};
