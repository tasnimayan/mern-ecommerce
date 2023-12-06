const mongoose =require('mongoose')

const productReviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true,
    min: 1,
    max: 250,
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
  },

  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'ProductModel',
    required: true,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'UserModel',
    required: true,
  },
},{
  timestamps:true,
  versionKey:false
})

const ProductReviewModel = mongoose.model('reviews', productReviewSchema)

module.exports = ProductReviewModel;