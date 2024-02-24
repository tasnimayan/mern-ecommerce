const mongoose =require('mongoose')

const productSchema = mongoose.Schema({
  title: {type:String, required:true},
  price: {type:Number, required:true},
  discount: {type:Boolean},
  discountPrice: {type:Number},
  image: {type:String},
  rating: {type:String},
  stock: {type:Number},
  sku:{type:String},
  remark: {type:String},
  categoryID: {
    type:mongoose.Schema.ObjectId,
    ref:"CategoryModel",
    required:true
  },
  brandID: {
    type:mongoose.Schema.ObjectId,
    ref:"BrandModel",
  },
  sellerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SellerModel"
  }
},{
  timestamps:true,
  versionKey:false
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel;