const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: {
        type: String
    },
    userId: {
        type: String
    },
    userEmail: {
        type: String
    },
    password: {
        type: String
    },
    company: {
        type: String
    },
    access: {
        type: String
    },
    lastLogin: {
        type: String
    },
    key: {
        type: String
    },
    active: {
        type: Boolean
    },
    trips: {
        type: String
    }
})

const User = mongoose.model('user', UserSchema)

module.exports = User