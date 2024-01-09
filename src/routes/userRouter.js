const express = require('express')
const router = express.Router()



const { UserSignUp, UserLogin, UserLogOut, VerifyOTP, UpdateProfile, ReadProfile, DeleteProfile } = require('../controllers/userController')
const {AuthVerification, AvailableFor} = require('../middlewares/AuthVerification')
const { WishList, AddToWishList, RemoveWishList} = require('../controllers/wishlistController')
const { CartList, AddToCart, RemoveFromCart } = require('../controllers/cartController')

// Full url to this route would be  
// {base_url/api/users/__endpoint__}


// User routing
router.post('/signup', UserSignUp)
router.get('/verify/:otp',AuthVerification, VerifyOTP)   // To verify user signup

router.post('/login', UserLogin)
router.get('/logout', AuthVerification, UserLogOut)

router.route('/profile')
  .get(AuthVerification, ReadProfile)  // Get profile
  .post(AuthVerification, UpdateProfile)  // Update profile
  .delete(AuthVerification, DeleteProfile)  // Delete profile


// // WishList routing
router.route('/wish-list')
  .get(AuthVerification, AvailableFor(["user"]), WishList)
  .post(AuthVerification, AvailableFor(["user"]), AddToWishList)
  .delete(AuthVerification, AvailableFor(["user"]), RemoveWishList)

// CartList routing
router.route('/cart-list')
  .get(AuthVerification, AvailableFor(["user"]), CartList)
  .post(AuthVerification, AvailableFor(["user"]), AddToCart)
  .delete(AuthVerification, AvailableFor(["user"]), RemoveFromCart)

module.exports = router;
