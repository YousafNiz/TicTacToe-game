const roomSchema = new mongoose.Schema({

    occupancy: {
        type: Number,
        default: 2,
    },
    maxRounds: {
        type: Number,
        default: 6,
    },
    currentRounds: {
        require: true,
        type: Number,
        default: 1,
    }
})