const WishModel = require('../models/wishModel')
const mongoose = require('mongoose')

const WishListService = async (userId) => {
  try {
    const id = new mongoose.Types.ObjectId(userId)
    let data = await WishModel.aggregate([
      {$match:{userID:id}},
      {$lookup:{from:'products', localField:'productID', foreignField:'_id', as:'products', pipeline:[
        {$project:{_id:1, title:1, price:1, discount:1, discountPrice:1, image:1}}
      ]}},
      {$project:{productID:0, createdAt:0, updatedAt:0}}
    ])
    return data;
  }
  catch (err) {
    console.log(err)
    return { status: "fail", message:err.message };
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
    return { status: "fail", message:err.message };
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
    return { status: "fail", message:err.message };
  }
};

module.exports = {
  WishListService,
  AddWishListService,
  RemoveWishListService,
};
