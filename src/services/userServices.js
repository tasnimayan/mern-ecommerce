const ProfileModel = require("../models/profileModel");
const UserModel = require("../models/userModel");
const EmailSend = require('../utils/emailUtility')
const toObjectId = require('mongoose').Types.ObjectId

// complete
const userOTPService = async (email) => {
  try {
    let code = Math.floor(100000 + Math.random() * 900000);
    let emailText = `<h3>Please confirm your sign-up request</h3> </br></br>
    To verify your account is safe, please use the following code to enable your new device — it will expire in 30 minutes: </br> <h3>${code} </h3>`;
    let emailSubject = "Your confirmation code";
    await EmailSend(email, emailText, emailSubject);
    
    await UserModel.updateOne(
      { email: email },
      { $set: { otp: code } }
    );
    return { status: "success", message: "6 digit OTP has been sent to your email" };
  } catch (err) {
    return { status: "failed", message: err.message };
  }
};
// complete
const verifyOTPService = async (email, otp) => {
  try{
    let  user = await UserModel.findOneAndUpdate({email:email , otp:otp}, {$set:{otp:"-1", isVerified:true}})
    if(!user){
      return { status: "failed", message: "wrong otp"};
    }
    else{
      return { status: "success", message: "Valid otp"};
    }
  }
    catch (err) {
    return { status: "failed", message: err.message };
  }
};
// Complete
const SignUpService = async (userData) => {
  try{
    // check if the user is already available or not
    let isUser = await UserModel.findOne({email:userData.email})
    if(isUser){
      return { status: "failed", message: "already have an account!" };
    }

    let user = await UserModel.create(userData)
    if(!user){
      return {status:'failed', message:"Could not create account"}
    }
    // Send OTP upon creating the account
    let response = userOTPService(user.email)
    return response;
  }catch (err) {
    return { status: "failed", message: err.message };
  }
};
// Complete 
const UpdateProfileService = async (userId, updateData) => {
  try{
    let id = new toObjectId(userId)
    await ProfileModel.updateOne({_id :id}, {$set:updateData}, {upsert:true})
    return {status:'success' , message:"profile save success"}
  }catch (err) {
    return { status: "failed", message: err.message };
  }
};
// 
const ReadProfileService = async (userId) => {
  try{
    if(!userId){
      return null;
    }
    let id = new toObjectId(userId)

    let data = await ProfileModel.aggregate([
      {$match:{_id:id}},
      {$lookup:{from:'users', localField:"_id", foreignField:"_id", as:"user", pipeline:[
        {$project:{_id:0, email:1, role:1, isVerified:1}}
      ]}},
      {$unwind:"$user"},
    ]);
    return {status:'success' ,data : data[0]}
  } 
  catch (err) {
    console.log(err)
    return { status: "failed", message: err.message };
  }
};

const DeleteProfileService = async (userId) =>{

}

module.exports = {
  SignUpService,
  userOTPService,
  verifyOTPService,
  UpdateProfileService,
  ReadProfileService,
  DeleteProfileService
};