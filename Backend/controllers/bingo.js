const BingoModel = require('../models/Bingo')

const getBingos = async (req, res, next) => {
  try {
    const bingos = await BingoModel.find({ organizer: req.user });
    res.status(200).json(bingos);
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};


const addBingo = async (req, res, next) => {
    const{association,firstPrice ,donation ,status,ticketPrice} = req.body
    if(!association || !firstPrice || !donation || !status || !ticketPrice){
        return next({ message: 'Name is required' });
    }
  try {
    const bingo = new BingoModel(req.body);
    const savedBingo = await bingo.save();
    res.status(200).json(savedBingo);
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};

const deleteBingo = async (req, res, next) => {
  try {
    const bingoId = req.params.id;
    await BingoModel.findByIdAndDelete(bingoId);
    res.status(200).json("success");
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};

const updateBingo = async (req, res, next) => {
  try {
    const bingoId = req.params.id;
    const updatedBingo = req.body;
    await BingoModel.findByIdAndUpdate(bingoId, updatedBingo, { new: true });
    res.status(200).json('success')
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getBingos,
  addBingo,
  deleteBingo,
  updateBingo,
};
