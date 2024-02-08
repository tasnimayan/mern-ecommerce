const {
  WishListService,
  AddWishListService,
  RemoveWishListService,
} = require('../services/wishlistServices');

exports.WishList = async (req , res)=>{
    let data =  await WishListService(req.user._id);
    return res.status(200).json(data)
}
exports.AddToWishList = async (req , res)=>{
    let data =  await AddWishListService(req.user._id, req.body.productId);
    return res.status(200).json(data)
}
exports.RemoveWishList = async (req , res)=>{
    let data =  await RemoveWishListService(req.user._id, req.body.productId);
    return res.status(200).json(data)
}