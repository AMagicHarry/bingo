const mongoose = require('mongoose');

const bingoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    numberOfTickets: {
        type: Number,
        required: true
    },
    ticketPrice: {
        type: Number,
        required: true
    }
},
    { timestamps: true }
);

const Bingo = mongoose.model('Bingo', bingoSchema);

module.exports = Bingo;

