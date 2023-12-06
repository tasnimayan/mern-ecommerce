const mongoose =require('mongoose')

const categorySchema = new mongoose.Schema({
  categoryName: {type:String, required:true},
  categoryImg: {type:String, required:true},

},{
  timestamps:true,
  versionKey:false
})

const CategoryModel = mongoose.model('categories', categorySchema)

module.exports = CategoryModel;