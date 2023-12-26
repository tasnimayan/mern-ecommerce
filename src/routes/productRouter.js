const express = require('express')
const router = express.Router()


const { ProductCategoryList, ProductListByCategory, ProductSliderList, ProductDetails, ProductBrandList, ProductListByBrand,  ProductListBySimilar, ProductListByKeyword, ProductListByRemark, ProductReviewList, CreateProductReview} = require('../controllers/productController');

// Full url to this route would be  
// {base_url/api/routing_points_here}


router.get('/products/:productId', ProductDetails)
router.get('/brands', ProductBrandList)
router.get('/brands/:brandId', ProductListByBrand)
router.get('/category', ProductCategoryList)
router.get('/category/:categoryId', ProductListByCategory)
router.get('/similar/:categoryId', ProductListBySimilar)
router.get('/search/:keyword', ProductListByKeyword)
router.get('/remark/:remark', ProductListByRemark)
router.get('/slider', ProductSliderList)

router.route('/products/:productId/review')
  .get(ProductReviewList)
  .post(CreateProductReview)  // Add auth middleware






// // router.get('/ProductBrandList', ProductBrandList)
// router.get('/ProductCategoryList', ProductCategoryList)
// router.get('/ProductSliderList', ProductSliderList)
// router.get('/ProductListByBrand/:BrandID', ProductListByBrand)
// router.get('/ProductListByCategory/:CategoryID',ProductListByCategory)
// router.get('/ProductListBySimilar/:CategoryID', ProductListBySimilar)
// router.get('/ProductListByKeyword/:Keyword', ProductListByKeyword)
// router.get('/ProductListByRemark/:Remark', ProductListByRemark)
// // router.get('/ProductDetails/:ProductID', ProductDetails)
// router.get('/ProductReviewList/:ProductID', ProductReviewList)
// router.get('/UserOTP/:email', )
// router.get('/VerifyLogin/:email/:otp')
// router.get('/UserLogout')
// router.post('/CreateProfile')
// router.post('/UpdateProfile')
// router.get('/ReadProfile')
// router.post('/SaveWishList')
// router.post('/RemoveWishList')
// router.get('/WishList')
// router.post('/SaveCartList')
// router.post('/RemoveCartList')
// router.get('/CartList')
module.exports = router;