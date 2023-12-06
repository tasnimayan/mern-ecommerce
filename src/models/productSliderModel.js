const mongoose =require('mongoose')

const productSliderSchema = new mongoose.Schema({
  title: {type:String, required:true},
  des: {type:String, required:true},
  price: {type:Number, required:true},
  image: {type:String},
  productID: {
    type:mongoose.Schema.ObjectId,
    ref:"ProductModel",
    required:true
  }
},{
  timestamps:true,
  versionKey:false
})

const ProductSliderModel = mongoose.model('product-slider', productSliderSchema)

module.exports = ProductSliderModel;