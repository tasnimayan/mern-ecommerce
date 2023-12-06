const {
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
  CreateReviewService } = require('../services/productServices')

exports.ProductBrandList = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"ProductBrandList"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductCategoryList = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"ProductCategoryList"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductSliderList = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"ProductSliderList"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductDetails = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"ProductDetails"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductListByBrand = async (req, res) =>{
   try{
      const data = await ListByBrandService(req.params.brandId)
      
      if(!data.status =="success"){
         res.status(404).send(data)
      }

      res.status(200).send(data)
   }
   catch(err) {
      console.log(err)
      res.status(404).send({err})
   }
}

exports.ProductListByCategory = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"ProductListByCategory"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductListBySimilar = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"ProductListBySimilar"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductListByKeyword = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"ProductListByKeyword"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductListByRemark = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"ProductListByRemark"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductReviewList = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"ProductReviewList"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.CreateProductReview = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"CreateProductReview"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

