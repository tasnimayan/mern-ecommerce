const {
  WishListService,
  SaveWishListService,
  RemoveWishListService,
} = require('../services/wishlistServices');

exports.WistList = async (req , res)=>{
    let result =  await WishListService(req.body.userID);
    return res.status(200).json(result)
}
exports.SaveWistList = async (req , res)=>{
    let result =  await SaveWishListService(req.body.userID, req.body.productID);
    return res.status(200).json(result)
}
exports.RemoveWistList = async (req , res)=>{
    let result =  await RemoveWishListService(req.body.userID, req.body.productID);
    return res.status(200).json(result)
}