const express = require('express')
const router = express.Router()



const { UserSignUp, UserLogin, UserLogOut, VerifyOTP, UpdateProfile, ReadProfile, DeleteProfile } = require('../controllers/userController')
const {AuthVerification, AvailableFor} = require('../middlewares/AuthVerification')

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
// router.post('/SaveWishList', SaveWishListService)
// router.post('/RemoveWishList', RemoveWishListService)
// router.get('/WishList', WishListService)

// CartList routing

// router.post('/SaveCartList', )
// router.post('/RemoveCartList')
// router.get('/CartList')

module.exports = router;
