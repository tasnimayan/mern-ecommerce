
const UserModel = require("../models/userModel");
const {
  userOTPService,
  verifyOTPService,
  UpdateProfileService,
  ReadProfileService,
  SignUpService
} = require("../services/userServices");
const { EncodeToken } = require("../utils/tokenHelper");

// Signup complete with OTP mailing
exports.UserSignUp = async (req, res) => {
  if(!req.body.email && !req.body.password){
    res.status(404).send({message:"email or password can not be empty"})
  }

  let user = {
    email: req.body.email,
    password: req.body.password
  }
  try{
    const result = await SignUpService(user);

    if(result.status !== 'success'){
      return res.status(404).send(result)
    }
    return res.status(200).send(result);
  }
  catch(err){
    res.status(500).send({message:err.message})
  }
};
// OTP verification complete
exports.VerifyOTP = async (req, res) =>{
  let result = await verifyOTPService(req.user?.email, req.params.otp)
  if(result.status !== 'success'){
    return res.status(404).send(result)
  }
  return res.status(200).send(result)
}
// Not needed
exports.UserOTP = async (req, res) => {
  const result = await userOTPService(req.user.email);
  return res.status(200).json(result);
};

// Login System complete
exports.UserLogin = async (req, res) => {
  let email = req.body.email ?? '';
  let password = req.body.password ?? '';
  try{
    const user = await UserModel.Login(email, password);

    if (!user) {
      return res.status(404).json({message:"No user found"});
    }
    // Create jwt token for authentication
    let token = await EncodeToken(user._id, user.email)
    //cookie set
    let cookieOption = {
      expires: new Date(Date.now() + 24 * 6060 * 10000),
      httpOnly: false,
    };
    res.cookie("shopinz", token, cookieOption);
    res.status(200).send({status:"success",message:"User login successful", data:{_id:user._id, email:user.email,role:user.role}})
  }
  catch(err){
    res.status(500).send({message:err.message})
  } 
};
// Logout complete
exports.UserLogOut = async (req, res) => {
  let cookieOption = {
    expires: new Date(Date.now() - 24 * 60 * 60 * 1000),
    httpOnly: false,
  };
  res.cookie("ecommerce", req.token, cookieOption);
  return res.status(200).send({status:"success"});
};

// Complete
exports.UpdateProfile = async (req, res) => {
  // None other than this fields will be updated
  let validUpdate = ["cus_name", "cus_add", "cus_city", "cus_country", "cus_postcode", "cus_state", "cus_phone", "ship_add", "ship_city", "ship_country", "ship_name", "ship_phone", "ship_postcode", "ship_state"]
  
  let  data = {
    cus_name: req.body.cus_name,
    cus_add: req.body.cus_add,
    cus_city: req.body.cus_city,
    cus_country: req.body.cus_country,
    cus_postcode: req.body.cus_postcode,
    cus_state: req.body.cus_state,
    cus_phone: req.body.cus_phone,
    ship_add: req.body.ship_add,
    ship_city: req.body.ship_city,
    ship_country: req.body.ship_country,
    ship_name: req.body.ship_name,
    ship_phone: req.body.ship_phone,
    ship_postcode: req.body.ship_postcode,
    ship_state: req.body.ship_state
  }
  const result = await UpdateProfileService(req.user._id, data);
  return res.status(200).json(result);
  
};
// Modification needed for validation
exports.ReadProfile = async (req, res) => {
  const result = await ReadProfileService(req.user?._id);
  return res.status(200).send(result);
};

exports.DeleteProfile = async (req, res) =>{
  //delete profile
}