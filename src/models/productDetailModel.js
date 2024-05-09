const mongoose =require('mongoose')

const productDetailSchema = new mongoose.Schema({
  productID: {
    type:mongoose.Schema.ObjectId,
    ref:"ProductModel",
    required:true
  },

  images: [{type:String}],
  des: {type:String, required:true},
  color: [{type:String}],
  size: [{type:String}],
  tags: [{type:String}],
},{
  timestamps:true,
  versionKey:false
})

const ProductDetailModel = mongoose.model('product-details', productDetailSchema)

module.exports = ProductDetailModel;