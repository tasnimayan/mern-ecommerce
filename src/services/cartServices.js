
const CartModel = require('../models/cartModel')
const toObjectId = require('mongoose').Types.ObjectId

exports.getCartService = async (userId) => {
  try {
    const id = new toObjectId(userId)

    let data = await CartModel.aggregate([
      {$match:{userID:id}},
      {$lookup:{from:'products', localField:'productID', foreignField:'_id', as:'product', pipeline:[
        {$project:{_id:0, title:1, price:1,discount:1, discountPrice:1, image:1}},
      ]}},
      {$unwind:"$product"},
      {$project:{_id:0, userID:0, createdAt:0, updatedAt:0}}
    ])

    let totalAmount = 0;
    data.forEach((item)=>{
      let price;
      item.product.discount ? price = parseFloat(item.product.discountPrice) : price = parseFloat(item.product.price)
      totalAmount += parseInt(item.qty) * price
    })
  
    let vat = totalAmount * 0.05
    let payable = totalAmount + vat

    return { status: "success", data: data, summary:{totalAmount, vat, payable}};
  }
  catch (err) {
    return { status: "failed", message:err.message };
  }
}
// Complete
exports.AddToCartService = async (userId, product) => {
   
  try {
    const user = new toObjectId(userId)
    product.productID = new toObjectId(product.productID)

    let data = await CartModel.create(
      {userID:user, productID:product.productID, color:product.color, qty:product.qty, size:product.size}
    );
    return {status: "success", data:data};
  }
  catch (err) {
    console.log(err)
    return {status: "failed", message:err.message};
  }
}
// Complete
exports.RemoveCartService = async (userId, productId) => {
  try {
    const user = new toObjectId(userId)
    const product = new toObjectId(productId)

    let data = await CartModel.deleteOne(
      {userID:user, productID:product},
    );
    return {status: "success", data:data};
  }
  catch (err) {
    console.log(err)
    return {status:"failed", message:err.message};
  }
};

