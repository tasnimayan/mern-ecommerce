const ProductModel = require('../models/productModel')
const BrandModel = require('../models/brandModel')
const CategoryModel = require('../models/categoryModel')
const ProductReviewModel = require('../models/productReviewModel')
const ProductSliderModel = require('../models/productSliderModel')
const mongoose = require('mongoose')

// Complete
const BrandListService = async () =>{
  try{
    let brands = await BrandModel.find()
    return {status:'success', data:brands}
  }
  catch(err){
    console.log(err)
    return {status:"fail", message:err.message}
  }
}
// Complete
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
    return {status:"fail", message:err.message}
  }
}
// Complete
const CategoryListService = async () =>{
  try{
    let categories = await CategoryModel.find()
    if(!categories){
      return {status:"failed"}
    }
    return {status:"success", data:categories}
  }
  catch(err){
    console.log(err)
    return {status:"fail", message:err.message}
  }
}
// Complete
const SliderListService = async () =>{
  try{
    let sliders = await ProductSliderModel.find()
    return {status:'success', data:sliders}
  }
  catch(err){
    console.log(err)
    return err
  }
}
// (complete)
const DetailsService = async (productId) =>{
  try {
    let id = new mongoose.Types.ObjectId(productId);
    let matchStage = {$match: { _id: id } };

    let joinWithBrandStage = {$lookup: {from: "brands",localField: "brandID",foreignField: "_id",as: "brand",},};
    let joinWithCategoryStage = {$lookup: {from: "categories",localField: "categoryID",foreignField: "_id",as: "category"}};
    let joinWithDetailsStage = {$lookup: {from: "product-details",localField: "_id",foreignField: "productID",as: "details"}};
    let projectionStage = {$project:{'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0,}}
    let unwindBrandStage = { $unwind: "$brand" };
    let unwindCategoryStage = { $unwind: "$category" };
    let unwindDetailStage = { $unwind: "$details" };

    let data = await ProductModel.aggregate([
      matchStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      joinWithDetailsStage,
      unwindBrandStage,
      unwindCategoryStage,
      unwindDetailStage,
      projectionStage,
    ]);

    return { status: "success", data: data };
  } catch (err) {
    console.log(err)
    return {status:"fail", message:err.message}
  }
}
// Complete
const ListByCategoryService = async (categoryId) =>{
  const id = new  mongoose.Types.ObjectId(categoryId);
  let matchStage = {$match:{categoryID:id}}
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
    return {status:"fail", message:err.message}
  }
}
// Complete
const ListBySimilarService = async (categoryId) =>{
  const id = new  mongoose.Types.ObjectId(categoryId);

  let matchStage = {$match:{categoryID:id}}
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
    return {status:"fail", message:err.message}
  }
  
}
// (complete)
const ListByKeywordService = async (keyword) =>{
  try{
    let searchRegex = {$regex:keyword, $options:"i"}
    let searchParams = [{title:searchRegex},{shortDes:searchRegex}]
    let searchQuery = {$or:searchParams}
    let matchStage = {$match:searchQuery}

    let joinWithBrandStage = {$lookup:{from:'brands', localField:"brandID", foreignField:"_id", as:"brand"}}
    let joinWithCategoryStage = {$lookup:{from:'categories', localField:"categoryID", foreignField:"_id", as:"category"}}
    let unwindBrandStage = {$unwind:"$brand"}
    let unwindCategoryStage = {$unwind:"$category"}
    let projectionStage = {$project:{'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0,}}

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
    return {status:"fail", message:err.message}
  }

}
// (complete)
const ListByRemarkService = async (remark) =>{
  try{
    let matchStage = {$match:{remark:remark}}
    let joinWithBrandStage = {$lookup:{from:'brands', localField:"brandID", foreignField:"_id", as:"brand"}}
    let joinWithCategoryStage = {$lookup:{from:'categories', localField:"categoryID", foreignField:"_id", as:"category"}}
    let unwindBrandStage = {$unwind:"$brand"}
    let unwindCategoryStage = {$unwind:"$category"}
    let projectionStage = {$project:{'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0,}}

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
    return {status:"fail", message:err.message}
  }
  
}

const ReviewListService = async (productId) =>{
  try {
    let id = new mongoose.Types.ObjectId(productId);
    let matchStage = {$match:{product:id}};

    let joinWithProfileStage = {$lookup: {from: "profiles",localField: "user",foreignField: "_id",as: "profile",},};
    let unwindProfileStage = { $unwind: "$profile" };
    let projectionStage = {$project:{'des':1,'rating' : 1,'profile.cus_name': 1,}}

    let data = await ProductReviewModel.aggregate([
      matchStage,
      joinWithProfileStage,
      unwindProfileStage,
      projectionStage,
    ]);

    if(!data){
      return {status:"failed"}
    }
    return {status:"success", data:data}
  }
  catch(err) {
    console.log(err)
    return {status:"fail", message:err.message}
  }
}
// Complete
const CreateReviewService = async (productReview) =>{
  let data  = await ProductReviewModel.updateOne({user:productReview.user, product:productReview.product}, productReview, {upsert:true})
  return data
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
  ListByRemarkService,
  ReviewListService,
  CreateReviewService
};

