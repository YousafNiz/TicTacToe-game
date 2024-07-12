
const mongoose = require('mongoose');

const playersSchema = new mongoose.Schema({
    nickName: {
        type: String,
        trim: true,
    },
    socketID: {
        type: String,
    },
    points: {
        type: Number,
        default: 0,
    },
    playersType: {
        require: true,
        type: String,
    }
});

module.exports = playersSchema;