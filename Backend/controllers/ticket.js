const TicketModel = require('../models/Ticket');
const { sendTicketEmail, generateBingoGrid } = require('../utils/functions')
const mongoose = require('mongoose')

const getTickets = async (req, res, next) => {
  try {
    const tickets = await TicketModel.find({ ownerEmail: req.user.email });
    res.status(200).json(tickets);
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};



const getAssociationTickets = async (req, res, next) => {
  try {
    let history = await TicketModel.aggregate([
      {
        $match: {
          association: req.user._id
        }
      },
      {
        $addFields: {
          ticketPriceNumber: { $convert: { input: "$ticketPrice", to: "decimal", onError: 0.0, onNull: 0.0 } },
          soldTickets: {
            $cond: { if: "$sold", then: 1, else: 0 }
          },
        }
      },
      {
        $group: {
          _id: "$createdAt",
          totalTickets: { $sum: 1 },
          totalSold: { $sum: "$soldTickets" },
          totalRevenue: { $sum: { $cond: { if: "$sold", then: "$ticketPriceNumber", else: 0 } } },
          averageTicketPrice: { $avg: "$ticketPriceNumber" }, 
          
        }
      },
      {
        $project: {
          _id: 1,
          createdAt: "$_id",
          totalTicket: "$totalTickets",
          ticketPrice:{ $round: ["$averageTicketPrice"] } ,
          totalSold: "$totalSold",
          revenue: "$totalRevenue",
          availableTickets: { $subtract: ["$totalTickets", "$totalSold"] }
        }
      },
      { $sort: { createdAt: 1 } } 
    ]);

    history = history.map(item => {
      return {
        ...item,
        ticketPrice: parseFloat(item.ticketPrice.toString()), 
      };
    });

    console.log(history)
    res.status(200).json(history)
    
  } catch (error) {
    return next({ message: 'Internal Server Error'});
  }

}



const buyTicket = async (req, res, next) => {
  const { ownerName, ownerEmail, bingoId, numberOfTickets, ticketPrice } = req.body;

  if (!ownerName || !ownerEmail || !bingoId || !numberOfTickets || !ticketPrice) {
    return next({ message: 'All fields are required' });
  }

  try {
    const savedTickets = [];
    for (const ticketNumber of numberOfTickets) {
      const bingoGrid = await generateBingoGrid();

      const ticketData = {
        ownerName,
        ownerEmail,
        bingo: bingoId,
        ticketNumber,
        ticketPrice,
        gridNumbers: bingoGrid,
      };

      const ticket = new TicketModel(ticketData);
      const savedTicket = await ticket.save();
      savedTickets.push(savedTicket);

      await sendTicketEmail(ownerName, ownerEmail, savedTicket, bingoGrid);
    }
    res.status(200).json(savedTickets);
  } catch (error) {
    console.error('Error buying tickets:', error);
    return next({ message: 'Internal Server Error', error });
  }
};




const deleteTicket = async (req, res, next) => {
  try {
    const ticketId = req.params.id;
    await TicketModel.findByIdAndDelete(ticketId);
    res.status(200).json("Ticket successfully deleted");
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};


const updateTicket = async (req, res, next) => {
  try {
    const ticketId = req.params.id;
    const updatedTicket = req.body;
    await TicketModel.findByIdAndUpdate(ticketId, updatedTicket, { new: true });
    res.status(200).json('Ticket successfully updated');
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getTickets,
  buyTicket,
  deleteTicket,
  updateTicket,
  getAssociationTickets,
};
