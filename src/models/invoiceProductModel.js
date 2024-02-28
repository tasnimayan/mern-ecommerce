const mongoose =require('mongoose')

const invoiceProductSchema = new mongoose.Schema({
  userID:{
    type:mongoose.Schema.ObjectId,
    ref: 'UserModel',
    required:true
  },
  invoiceID:{
    type:mongoose.Schema.ObjectId,
    ref: 'InvoiceModel',
    required:true
  },
  productID:{
    type:mongoose.Schema.ObjectId,
    ref: 'ProductModel',
    required:true
  },
  qty: {type:Number, required:true},
  price: {type:Number, required:true},
  color:{ type:String },
  size:{ type: String }

},{
  timestamps:true,
  versionKey:false
})

const InvoiceProductModel = mongoose.model('invoice-products', invoiceProductSchema)

module.exports = InvoiceProductModel;