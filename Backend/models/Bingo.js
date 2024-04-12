const mongoose = require('mongoose');

const bingoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    association: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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
    gameDay: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true
    },
    prices: {
        type: String,
        required: true
    },
    tickets:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Ticket',
            required:false
        }
    ]
},
{ timestamps: true }
);

const Bingo = mongoose.model('Bingo', bingoSchema);

module.exports = Bingo;
