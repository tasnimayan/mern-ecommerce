const {getCartService, AddToCartService, RemoveCartService} = require('../services/cartServices')

exports.CartList = async (req , res)=>{
    let data = await getCartService(req.user._id);
    return res.status(200).send(data)
}

exports.AddToCart = async (req , res)=>{
  let product = {
    productID: req.body.productID,
    color: req.body.color,
    qty: req.body.qty,
    size: req.body.size
  }
  let data =  await AddToCartService(req.user._id, product);
  return res.status(200).send(data)
}

exports.RemoveFromCart = async (req , res)=>{
    let data =  await RemoveCartService(req.user._id, req.body.productID);
    return res.status(200).send(data)
}