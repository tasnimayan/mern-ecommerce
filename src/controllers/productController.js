const { default: mongoose } = require('mongoose');
const {
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
  CreateReviewService,
  ListByRatingService } = require('../services/productServices')

// (complete)
exports.ProductBrandList = async (req, res) =>{
   try{
      const brands = await BrandListService();
      if(brands.status !== 'success'){
         return res.status(404).send(brands)
      }
    res.status(200).send(brands)
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}
// (complete)
exports.ProductCategoryList = async (req, res) =>{
   try{
      const data = await CategoryListService()
      if(data.status !=="success"){
         return res.status(404).send(data)
      }
      res.status(200).send(data)
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}
// (complete)
exports.ProductSliderList = async (req, res) =>{
   try{
      const data = await SliderListService()
      if(data.status !=="success"){
         return res.status(404).send(data)
      }
      res.status(200).send(data)
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}
// (complete)
exports.ProductDetails = async (req, res) =>{
   try{
      const data = await DetailsService(req.params.productId)
      if(data.status !=="success"){
         return res.status(404).send(data)
      }
      res.status(200).send(data)
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

// (complete)  
exports.ProductListByBrand = async (req, res) =>{
   try{
      const data = await ListByBrandService(req.params.brandId)
      if(data.status !=="success"){
         return res.status(404).send(data)
      }
      res.status(200).send(data)
   }
   catch(err) {
      console.log(err)
      res.status(404).send({err})
   }
}

// (complete)
exports.ProductListByCategory = async (req, res) =>{
   try{
      const data = await ListByCategoryService(req.params.categoryId)
      if(data.status !=="success"){
         return res.status(404).send(data)
      }
      res.status(200).send(data)
   }
   catch(err) {
      console.log(err)
      res.status(404).send({err})
   }
}

// (Complete)
exports.ProductListBySimilar = async (req, res) =>{
   try{
      const data = await ListBySimilarService(req.params.categoryId)
      if(data.status !=="success"){
         return res.status(404).send(data)
      }
      res.status(200).send(data)
   }
   catch(err) {
      console.log(err)
      res.status(404).send({err})
   }
}
// (complete)
exports.ProductListByKeyword = async (req, res) =>{
   try{
      const data = await ListByKeywordService(req.params.keyword)
      if(data.status !== "success"){
         return res.status(404).send(data)
      }
      res.status(200).send(data)
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}
// (complete)
exports.ProductListByRemark = async (req, res) =>{
   try{
      const data = await ListByRemarkService(req.params.remark)
      if(data.status !=="success"){
         return res.status(404).send(data)
      }
      res.status(200).send(data)
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductListByRating = async (req, res) =>{
   try{
      const data = await ListByRatingService()
      if(data.status !=="success"){
         return res.status(404).send(data)
      }
      res.status(200).send(data)
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}
// (complete)
exports.ProductReviewList = async (req, res) =>{
   try{
      const data = await ReviewListService(req.params.productId)
      if(data.status !=="success"){
         return res.status(404).send(data)
      }
      res.status(200).send(data)
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}
// (complete)
exports.CreateProductReview = async (req, res) =>{
   try{
      let productReview = {
         review: req.body.review,
         rating: req.body.rating,
         product: new mongoose.Types.ObjectId(req.params.productId),
         user: new mongoose.Types.ObjectId(req.user._id),
      }
      const data = await CreateReviewService(productReview)
      if(data.status !== "success"){
         return res.status(404).send(data)
      }
      res.status(201).send(data)
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}
