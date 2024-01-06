const WishModel = require('../models/wishModel')
const mongoose = require('mongoose')

const WishListService = async (userId) => {
  try {
    const user = mongoose.Types.ObjectId(userId)
    let data = await WishModel.find({userID:user});
    return { status: "success", data: data };
  }
  catch (err) {
    console.log(err)
    return err;
  }
}

const SaveWishListService = async (userId, productId) => {
   
  try {
    const user = mongoose.Types.ObjectId(userId)
    const product = mongoose.Types.ObjectId(productId)

    let data = await WishModel.updateOne(
      {userID:user},
      { $set: {productID:product} },
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
    const user = mongoose.Types.ObjectId(userId)
    const product = mongoose.Types.ObjectId(productId)

    let data = await WishModel.deleteOne(
      {userID:user, productID:product}
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
  SaveWishListService,
  RemoveWishListService,
};
