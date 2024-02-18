const express = require('express')
const router = express.Router()


const { ProductCategoryList, ProductListByCategory, ProductSliderList, ProductDetails, ProductBrandList, ProductListByBrand,  ProductListBySimilar, ProductListByKeyword, ProductListByRemark, ProductReviewList, CreateProductReview, ProductListByRating} = require('../controllers/productController');

const { AuthVerification, AvailableFor } = require('../middlewares/AuthVerification');
const { FeaturesList } = require('../controllers/featuresController');

// Full url to this route would be  
// {base_url/api/routing_points_here}


router.get('/product/:productId', ProductDetails)
router.get('/brands', ProductBrandList)
router.get('/brands/:brandId', ProductListByBrand)
router.get('/category', ProductCategoryList)
router.get('/category/:categoryId', ProductListByCategory)
router.get('/similar/:categoryId', ProductListBySimilar)
router.get('/search/:keyword', ProductListByKeyword)
router.get('/remark/:remark', ProductListByRemark)
router.get('/slider', ProductSliderList)
router.get('/featured', FeaturesList)
router.get('/top-rated', ProductListByRating)

router.route('/:productId/review')
  .get(ProductReviewList)
  .post(AuthVerification, AvailableFor(["user", "admin"]), CreateProductReview)



module.exports = router;
