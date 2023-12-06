const mongoose =require('mongoose')

const wishSchema = new mongoose.Schema({
  productID:{
    type:mongoose.Schema.ObjectId,
    ref: 'ProductModel',
    required:true,
  },

  userID:{
    type:mongoose.Schema.ObjectId,
    ref: 'UserModel',
    required:true,
  }

},{
  timestamps:true,
  versionKey:false
})

const WishModel = mongoose.model('wishlists', wishSchema)

module.exports = WishModel;