
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type:String,
      unique:true,
    },
    otp: {
      type:String,
    }
  },
  {timestamps:true, versionKey:false}
)


const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel;