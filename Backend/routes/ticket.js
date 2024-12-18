const router = require('express').Router();
const {buyTicket,getTickets,deleteTicket,updateTicket,getAssociationTickets} = require('../controllers/ticket.js');
const { protect } = require('../middleware/protect.js');

router.use(protect);

router.route('/').get(getTickets)

router.route('/association-tickets').get(getAssociationTickets)

router.route('/').post(buyTicket)

router.route('/:id').delete(deleteTicket)

router.route('/:id').put(updateTicket)

module.exports = router;