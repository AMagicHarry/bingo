const router = require('express').Router();
const {getUsers,deleteUser,updateUser} = require('../controllers/user.js');
const { protect } = require('../middleware/protect.js');

router.use(protect);

router.route('/')
.get(getUsers) 

router.route('/:id')
.delete(deleteUser) 
.put(updateUser);


module.exports = router;