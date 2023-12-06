const mongoose =require('mongoose')

const productSchema = new mongoose.Schema({
  title: {type:String, required:true},
  shortDes: {type:String, required:true},
  price: {type:Number, required:true},
  discount: {type:Boolean},
  discountPrice: {type:Number},
  image: {type:String},
  star: {type:String},
  stock: {type:Boolean},
  remark: {type:String},
  categoryID: {
    type:mongoose.Schema.ObjectId,
    ref:"CategoryModel",
    required:true
  },
  brandID: {
    type:mongoose.Schema.ObjectId,
    ref:"BrandModel",
    required:true
  }
},{
  timestamps:true,
  versionKey:false
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel;