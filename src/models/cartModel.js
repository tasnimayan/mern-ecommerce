const mongoose =require('mongoose')

const cartSchema = new mongoose.Schema({
  productID:{
    type:mongoose.Schema.ObjectId,
    ref:'productModel',
    required:[true, "A product should be added"]
  },
  
  userID:{
    type:mongoose.Schema.ObjectId,
    ref:'userModel',
    required:[true, "A product should be added"]
  },

  color:{ type:String, required:true },
  price:{ type: Number, required:true },
  qty:{ type:Number, required:true },
  size:{ type: String, required:true },

},{
  timestamps:true,
  versionKey:false
})

const CartModel = mongoose.model('carts', cartSchema)

module.exports = CartModel;