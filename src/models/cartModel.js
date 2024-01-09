const mongoose =require('mongoose')

const cartSchema = new mongoose.Schema({
  products:[
    {
      productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ProductModel',
        required:[true, "A product should be added"]
      },
      color:{ type:String },
      qty:{ type:Number, required:true },
      size:{ type: String },
    }
  ],
  
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'UserModel',
    required:[true, "A product should be added"]
  }
},{
  timestamps:true,
  versionKey:false
})

const CartModel = mongoose.model('carts', cartSchema)

module.exports = CartModel;