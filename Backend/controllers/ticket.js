const TicketModel = require('../models/Ticket');
const {processPayment,sendTicketEmail} = require('../utils/functions')


const getTickets = async (req, res, next) => {
  try {
    const tickets = await TicketModel.find({ organizer: req.user });
    res.status(200).json(tickets);
  } catch (error) {
    return next({ message: 'Internal Server Error' });
  }
};


const buyTicket = async (req, res, next) => {
    const {ownerName, ownerEmail, bingoId, ticketNumbers, paymentInfo} = req.body;

    
    if (!ownerName || !ownerEmail || !bingoId || !ticketNumbers.length) {
        return next({ message: 'All fields are required' });
    }

    try {
        const paymentResult = await processPayment(paymentInfo);
        if (!paymentResult.success) {
            return res.status(400).json({ message: 'Payment failed' });
        }

        const savedTickets = [];
        for (const ticketNumber of ticketNumbers) {
            const ticketData = {
                ownerName,
                ownerEmail,
                bingo: bingoId,
                ticketNumber,
            };

            const ticket = new TicketModel(ticketData);
            const savedTicket = await ticket.save();
            savedTickets.push(savedTicket);

            await sendTicketEmail(ownerEmail, savedTicket);
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
};
