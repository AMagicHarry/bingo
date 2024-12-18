const BingoModel = require('../models/Bingo')
const TicketModel = require('../models/Ticket')

const getBingos = async (req, res, next) => {
  try {
    const bingos = await BingoModel.find();
    res.status(200).json(bingos);
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};


const getAssociationBingos = async (req, res, next) => {
  try {
    const bingos = await BingoModel.find()
      .populate({
        path: 'association',
        match: { _id: req.user._id }
      })
      .exec();
    res.status(200).json(bingos.filter(bingo => bingo.association !== null));
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
}


const addBingo = async (req, res, next) => {
  const { name, prices, startDate, endDate, gameDay, time, numberOfTickets, ticketPrice } = req.body;

  const totalTickets = parseInt(numberOfTickets, 10);

  if (isNaN(totalTickets) || totalTickets <= 0) {
    return next({ message: 'Invalid number of tickets' });
  }

  if (!prices || !ticketPrice || !startDate || !endDate || !gameDay || !time || !name) {
    return next({ message: 'All fields are required' });
  }

  try {
    const bingo = new BingoModel({
      association: req.user._id,
      prices,
      startDate,
      endDate,
      gameDay,
      time,
      name,
      ticketPrice,
    });

    const savedBingo = await bingo.save();

    const creationTimestamp = new Date();

    const ticketPromises = Array.from({ length: totalTickets }, (_, index) => {
      return new TicketModel({
        ticketNumber: index + 1,
        association: req.user._id,
        bingo: savedBingo._id,
        ticketPrice: ticketPrice,
        createdAt: creationTimestamp
      }).save();
    });

    const tickets = await Promise.all(ticketPromises);

    const ticketIds = tickets.map(ticket => ticket._id);

    savedBingo.tickets = ticketIds;
    await savedBingo.save();

    res.status(200).json(savedBingo);
  } catch (error) {
    console.error(error);
    return next({ message: 'Internal Server Error', error });
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
  getAssociationBingos,
  addBingo,
  deleteBingo,
  updateBingo,
};
