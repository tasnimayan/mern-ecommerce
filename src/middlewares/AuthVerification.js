const UserModel = require("../models/userModel");
const { DecodeToken } = require("../utils/tokenHelper");

const AuthVerification = async (req, res, next) =>{
  try{
    // if(!req.headers.authorization && !req.headers.authorization?.startsWith('Bearer')){
    //   return res.status(401).send({message:"Unauthorized"})
    // }
    // const token = req.headers.authorization?.split(' ')[1];
    if(!req.cookies.shopinz){
      return res.status(401).send({message:"Unauthorized"})
    }
		const token = req.cookies.shopinz;
    const user = await UserModel.verifyToken(token)

    if (!user) {
      res.status(401).send({message:"Unauthorized"})
    }

    req.token = token;
    req.user = {_id:user._id,email:user.email, role:user.role };

    next();
  }
  catch(err){
    console.log(err)
    return res.status(500).send({message:"Server Error"})
  }
}

const AvailableFor = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(401).send({message:"This route is not for current user role"});
    }
    next();
  };
}

module.exports = {
  AuthVerification,
  AvailableFor
}