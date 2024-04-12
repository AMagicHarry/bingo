const router = require('express').Router();
const {getWinners, addWinner, deleteWinner,updateWinner} = require('../controllers/winner.js');
const { protect } = require('../middleware/protect.js');

router.use(protect);

router.route('/').get(getWinners)
router.route('/').post(addWinner)
router.route('/:id').delete(deleteWinner)
router.route('/:id').put(updateWinner)

module.exports = router;