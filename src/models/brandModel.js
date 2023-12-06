const mongoose =require('mongoose')

const brandSchema = new mongoose.Schema({
  brandName:{
    type:String,
    unique:true
  },

  brandImg:{
    type:String
  }
},{
  timestamps:true,
  versionKey:false
})

const BrandModel = mongoose.model('brands', brandSchema)

module.exports = BrandModel;