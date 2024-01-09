const mongoose = require('mongoose')

const salesSchema = mongoose.Schema({
  productID:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'ProductModel'
  },
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required:true,
  },
  quantity: {type:Number, required:true},
  price: {type:Number},
  date: {type:Date}
},
{timestamps:false, versionKey:false})

const  SalesModel = mongoose.model('sales', salesSchema)

module.exports = SalesModel;