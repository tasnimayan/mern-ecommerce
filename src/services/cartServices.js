
const CartModel = require('../models/cartModel')

exports.cartServices = async (userId) => {
  try {
    let data = await CartModel.find({userId:id});
    return { status: "success", data: data };
  } catch (err) {
    console.log(err)
    return err;
  }
};