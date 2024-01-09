
const CartModel = require('../models/cartModel')
const toObjectId = require('mongoose').Types.ObjectId

exports.getCartService = async (userId) => {
  try {
    const id = new toObjectId(userId)

    let data = await CartModel.aggregate([
      {$match:{userID:id}},
      {$unwind: '$products'},
      {$lookup:{from:'products', localField:'products.productID', foreignField:'_id', as:'products.productData', pipeline:[
        {$project:{_id:0, title:1, price:1, discountPrice:1, image:1}}
      ]}},
      { $unwind: '$products.productData' },
      {
        $group: {
          _id: '$_id',
          // userID: { $first: '$userID' }, //includes the field if enabled
          products: { $push: '$products' }, // Reconstruct the 'products' array
        },
      },
      {$project:{_id:0, createdAt:0, updatedAt:0}}

    ])
    return { status: "success", data: data[0].products };
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

    let data = await CartModel.updateOne(
      {userID:user},
      {$push:{products:product}},
      { upsert: true }
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

    let data = await CartModel.updateOne(
      {userID:user},
      {$pull:{products:{productID:product}}}
    );
    return {status: "success", data:data};
  }
  catch (err) {
    console.log(err)
    return err;
  }
};

