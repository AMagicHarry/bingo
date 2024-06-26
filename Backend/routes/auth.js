const router = require('express').Router()
const cookieParser = require('cookie-parser')
const {login,register,logout,refreshToken} = require('../controllers/auth')
router.use(cookieParser())

router.route('/register').post(register)

router.route('/login').post(login)

router.route('/logout').post(logout)

router.route('/refresh_token').post(refreshToken)


module.exports = router
