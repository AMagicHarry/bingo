const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    bingo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bingo',
        required: true
    },
    ticketNumber: {
        type: Number,
        required: true
    }
},
{ timestamps: true });

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
