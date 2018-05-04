const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PodSchema = new Schema({
    pods: {
        type: [String]
    }
})

const TruckInfoSchema = new Schema({
    truckId: {
        type: String
    },
    driverId: {
        tyep: String
    },
    company: {
        type: String
    },
    producer: {
        tyep: String
    },
    pods: PodSchema,
    maxTemp: {
        type: Number
    },
    minTemp: {
        type: Number
    },
    maxHumi: {
        type: Number
    },
    minHumi: {
        type: Number
    }
})

const TruckInfo = mongoose.model('truckInfo', TruckInfoSchema)

module.exports = TruckInfo