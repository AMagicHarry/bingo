const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: false
    },
    ownerEmail: {
        type: String,
        required: false,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    association: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    bingo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bingo',
        required: true
    },
    ticketNumber: {
        type: String,
        required: true
    },
    transactionNumber:{
        type:String,
        required:false
    },
    ticketPrice:{
        type:String,
        required:true
    },
    grid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Grid',
        required:false,
    },
    sold:{
        type:Boolean,
        required:false
    },
},
{ timestamps: true });

module.exports = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);
