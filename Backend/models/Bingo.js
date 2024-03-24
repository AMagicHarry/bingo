const mongoose = require('mongoose');

const bingoSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    association: {
        type: String,
        required: true
    },
    firstPrice: {
        type: String,
        required: true
    },
    donation: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive', 'pending', 'completed'],
    },
    ticketPrice: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);

const Bingo = mongoose.model('Bingo', bingoSchema);

module.exports = Bingo;

