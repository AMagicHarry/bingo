const mongoose = require('mongoose');

const winnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    association:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'association',
        required: true
    },
    bingoName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
},
{ timestamps: true }
);

const Winner = mongoose.model('Winner', winnerSchema);

module.exports = Winner;
