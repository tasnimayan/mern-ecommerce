const express = require("express");
const router = express.Router();

const {
  ProductCategoryList,
  ProductListByCategory,
  ProductSliderList,
  ProductDetails,
  ProductBrandList,
  ProductListByBrand,
  ProductListBySimilar,
  ProductListByKeyword,
  ProductListByRemark,
  ProductReviewList,
  CreateProductReview,
  ProductListByRating,
  ProductList,
} = require("../controllers/productController");

const {
  AuthVerification,
  AvailableFor,
} = require("../middlewares/AuthVerification");
const { FeaturesList } = require("../controllers/featuresController");

// Full url to this route would be
// {base_url/api/routing_points_here}

// router.get('/', AvailableFor(["seller", "admin"]), CreateProduct)

router.get("/", ProductList);
router.get("/product/:productId", ProductDetails);
router.get("/brands", ProductBrandList);
router.get("/brands/:brandId", ProductListByBrand);
router.get("/category", ProductCategoryList);
router.get("/category/:categoryId", ProductListByCategory); //remove - moved logic to ProductList with param
router.get("/similar/:categoryId", ProductListBySimilar);
router.get("/search/:keyword", ProductListByKeyword); //remove - moved logic to ProductList with param
router.get("/remark/:remark", ProductListByRemark); //remove - moved logic to ProductList with param
router.get("/slider", ProductSliderList);
router.get("/featured", FeaturesList);
router.get("/top-rated", ProductListByRating);

router
  .route("/:productId/review")
  .get(ProductReviewList)
  .post(AuthVerification, AvailableFor(["user", "admin"]), CreateProductReview);

module.exports = router;
