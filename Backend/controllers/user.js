const UserModel = require('../models/User');

const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};



const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await UserModel.findByIdAndDelete(userId);
    res.status(200).json("User successfully deleted");
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};


const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    await UserModel.findByIdAndUpdate(userId, updatedUser, { new: true });
    res.status(200).json('User successfully updated');
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getUsers,
  deleteUser,
  updateUser,
};
