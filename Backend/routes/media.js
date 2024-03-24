const router = require('express').Router()
const cookieParser = require('cookie-parser')
const {uploadProfilePic} = require('../controllers/media')
const {mediaUploadProfile} = require('../config/multerConfig')
router.use(cookieParser())

router.route('/upload').post(mediaUploadProfile.single('file'), uploadProfilePic);

module.exports = router
