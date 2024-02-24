const mongoose =require('mongoose')

const productDetailSchema = new mongoose.Schema({
  images: [{type:String}],
  des: {type:String, required:true},
  color: [{type:String}],
  size: [{type:String}],
  tags: [{type:String}],

  productID: {
    type:mongoose.Schema.ObjectId,
    ref:"ProductModel",
    required:true
  }
},{
  timestamps:true,
  versionKey:false
})

const ProductDetailModel = mongoose.model('product-details', productDetailSchema)

module.exports = ProductDetailModel;