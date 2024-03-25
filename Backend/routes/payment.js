const router = require('express').Router();
const {payWithStripe} = require('../controllers/payment.js');
const { protect } = require('../middleware/protect.js');


router.use(protect);

router.route('/stripe').get(payWithStripe)


module.exports = router;