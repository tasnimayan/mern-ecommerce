const { DecodeToken } = require("../utils/tokenHelper");

const AuthVerification = (req, res, next) =>{
  try{
    if(!req.headers.authorization && !req.headers.authorization.startsWith('Bearer')){
      return res.status(401).send({message:"Unauthorized"})
    }
    const token = req.headers['authorization']?.split(' ')[1];
    const user = DecodeToken(token);

    if (!user) {
      res.status(401).send({message:"Unauthorized"})
    }

    req.token = token;
    req.user = user;

    next();
  }
  catch(err){
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