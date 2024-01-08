const mongoose = require('mongoose')

const salesSchema = mongoose.Schema({
  product: {type:String},
  quantity: {type:Number},
  price: {type:Number},
  date: {type:Date}
},
{timestamps:true,versionKey:false})

const  SalesModel = mongoose.model('sales', salesSchema)

module.exports = SalesModel;