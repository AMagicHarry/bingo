const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    purchaser:{
        type:String,
        required:true,
    },
    ticket: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Ticket',
        required:true,
    },
    ticketsBought: {
        type: String,
        required: true
    },
    transactionNumber:{
        type:String,
        required:true
    },
},
{ timestamps: true });

const Ticket = mongoose.model('Ticket', paymentSchema);

module.exports = Ticket;
