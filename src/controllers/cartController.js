const { cartServices } = require("../services/cartServices");

exports.userCart = async (req , res)=>{

  let data =  await cartServices(req.params.userId);
  return res.status(200).json(data)

}