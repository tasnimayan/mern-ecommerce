const express = require('express')
const router = express.Router()



const { } = require('../controllers/userController')
const AuthVerification = require('../middlewares/AuthVerification')

// Full url to this route would be  
// {base_url/api/users/__endpoint__}


// User routing
router.post('/signup')
router.post('/login', )
router.get('/logout', AuthVerification, )

router.route('/profile')
  .get(AuthVerification, )  // Get profile
  .post(AuthVerification, )  // Update profile
  .delete(AuthVerification, )  // Delete profile

router.get('/verify/:otp')   // To verify user signup

// WishList routing
router.post('/SaveWishList', SaveWishListService)
router.post('/RemoveWishList', RemoveWishListService)
router.get('/WishList', WishListService)

// CartList routing

router.post('/SaveCartList', )
router.post('/RemoveCartList')
router.get('/CartList')

module.exports = router;
