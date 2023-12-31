const express = require('express')
const router = express.Router()


const { ProductCategoryList, ProductListByCategory, ProductSliderList, ProductDetails, ProductBrandList, ProductListByBrand,  ProductListBySimilar, ProductListByKeyword, ProductListByRemark, ProductReviewList, CreateProductReview} = require('../controllers/productController');

const { AuthVerification, AvailableFor } = require('../middlewares/AuthVerification');

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
  .post(AuthVerification, AvailableFor(["user", "admin"]), CreateProductReview)





module.exports = router;
