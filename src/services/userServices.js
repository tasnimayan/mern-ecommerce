const ProfileModel = require("../models/profileModel");
const UserModel = require("../models/userModel");
const EmailSend = require('../utils/emailUtility');
const { EncodeToken } = require("../utils/tokenHelper");
const toObjectId = require('mongoose').Types.ObjectId
const InvoiceProductModel = require('../models/invoiceProductModel')

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

    // Create jwt token for authentication
    let token = await EncodeToken(user._id, user.email)

    // Send OTP upon creating the account
    let response = await userOTPService(user.email)

    return {...response, token:token};
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
const ReadOrdersService = async (userId) => {
  try{
    if(!userId){
      return { status: "failed", message: "Unauthorized" };
    }
    let id = new toObjectId("659a92722fb8853a2e3ff3cc")

    let data = await InvoiceProductModel.aggregate([
      {$match:{userID:id}},
      {$lookup:{from:'products', localField:"productID", foreignField:"_id", as:"product", pipeline:[
        {$project:{title:1, image:1}}
      ]}},
      {$unwind:"$product"},
      {$project: { qty:1, createdAt:1, product:1, price:1, invoiceID:1}}
    ]);

    return {status:'success' ,data : data}
  } 
  catch (err) {
    console.log(err)
    return { status: "failed", message: err.message };
  }
}

module.exports = {
  SignUpService,
  userOTPService,
  verifyOTPService,
  UpdateProfileService,
  ReadProfileService,
  DeleteProfileService,
  ReadOrdersService
};