const router = require('express').Router();
const {payWithStripe,payWithGpay} = require('../controllers/payment.js');
const { protect } = require('../middleware/protect.js');


router.use(protect);

router.route('/stripe').get(payWithStripe)
router.route('/g-pay').get(payWithGpay)


module.exports = router;