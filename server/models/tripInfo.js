const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoordSchema = new Schema({
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
})

const TripInfoSchema = new Schema({
    tripId: {
        type: String
    },
    truckId: {
        type: String
    },
    driverId: {
        tyep: String
    },
    startPos: CoordSchema,
    endPos: CoordSchema,
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    distance: {
        type: Number
    },
    price: {
        type: Number
    }
})

const TripInfo = mongoose.model('tripInfo', TripInfoSchema)

module.exports = TripInfo