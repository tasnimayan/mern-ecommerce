const ProductModel = require('../models/productModel')
const ProductDetailModel = require('../models/productDetailModel')
const BrandModel = require('../models/brandModel')
const CategoryModel = require('../models/categoryModel')
const ProductReviewModel = require('../models/productReviewModel')
const ProductSliderModel = require('../models/productSliderModel')
const mongoose = require('mongoose')


const BrandListService = async () =>{
  
}

const ListByBrandService = async (brandId) =>{

  const id = new  mongoose.Types.ObjectId(brandId);
  let matchStage = {$match:{brandID:id}}
  let joinWithBrandStage = {$lookup:{from:'brands', localField:"brandID", foreignField:"_id", as:"brand"}}
  let joinWithCategoryStage = {$lookup:{from:'categories', localField:"categoryID", foreignField:"_id", as:"category"}}
  let unwindBrandStage = {$unwind:"$brand"}
  let unwindCategoryStage = {$unwind:"$category"}
  let projectionStage = {$project:{'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0,}}

  try{
    const data = await ProductModel.aggregate([
      matchStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage
    ])

    if(!data){
      return {status:"failed"}
    }
    return {status:"success", data:data}
  }
  catch(err){
    console.log(err)
  }
  

}

const CategoryListService = async () =>{
  
}

const SliderListService = async () =>{
  
}

const DetailsService = async () =>{
  
}


const ListByCategoryService = async () =>{
  
}

const ListBySimilarService = async () =>{
  
}

const ListByKeywordService = async () =>{
  
}

const ListByRemark = async () =>{
  
}

const ReviewListService = async () =>{
  
}

const CreateReviewService = async () =>{
  
}

module.exports = {
  BrandListService,
  CategoryListService,
  SliderListService,
  DetailsService,
  ListByBrandService,
  ListByCategoryService,
  ListBySimilarService,
  ListByKeywordService,
  ListByRemark,
  ReviewListService,
  CreateReviewService
};

