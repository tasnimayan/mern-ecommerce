const {
  WishListService,
  AddWishListService,
  RemoveWishListService,
} = require('../services/wishlistServices');

exports.WishList = async (req , res)=>{
    let data =  await WishListService(req.user._id);
    if(data.length === 0){
        return res.status(404).send({ status: "fail", data: null });
    }
    return res.status(200).send({ status: "success", data: data[0] })
}
exports.AddToWishList = async (req , res)=>{
    let data =  await AddWishListService(req.user._id, req.body.productId);
    return res.status(200).send(data)
}
exports.RemoveWishList = async (req , res)=>{
    console.log(req.body.productId)
    let data =  await RemoveWishListService(req.user._id, req.body.productId);
    return res.status(200).send(data)
}