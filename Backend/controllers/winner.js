const WinnerModel = require('../models/Winner')

const getWinners = async (req, res, next) => {
  try {
    const winners = await WinnerModel.find({ organizer: req.user });
    res.status(200).json(winners);
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};


const addWinner = async (req, res, next) => {
    const {name, bingoName, price} = req.body;
    if (!name || !bingoName || !price) {
        return next({ message: 'All fields are required' });
    }
  try {
    const winner = new WinnerModel({
      name,
      association:req.user,
      price,
      bingoName
    });
    const savedWinner = await winner.save();
    res.status(200).json(savedWinner);
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};

const deleteWinner = async (req, res, next) => {
  try {
    const winnerId = req.params.id;
    await WinnerModel.findByIdAndDelete(winnerId);
    res.status(200).json("success");
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};



const updateWinner = async (req, res, next) => {
  try {
    const winnerId = req.params.id;
    const updatedWinner = req.body;
    await WinnerModel.findByIdAndUpdate(winnerId, updatedWinner, { new: true });
    res.status(200).json('success')
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};


module.exports = {
  getWinners,
  addWinner,
  deleteWinner,
  updateWinner,
};