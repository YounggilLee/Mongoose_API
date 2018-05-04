const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoordSchema = new Schema({
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
})

const LiveInfoSchema = new Schema({
    truckId: {
        type: String
    },
    podId: {
        type: String
    },
    timeSteamp: {
        type: Number
    },
    temp: {
        type: Number
    },
    humidity: {
        type: Number
    },
    coords: CoordSchema,
    tripId: {
        type: String
    },
    producer: {
        type: String
    },
    driverId: {
        tyep: String
    },
    company: {
        type: String
    }
})

const LiveInfo = mongoose.model('liveInfo', LiveInfoSchema)

module.exports = LiveInfo