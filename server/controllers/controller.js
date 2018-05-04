const Company = require('../models/company')
const LiveInfo = require('../models/liveInfo')
const TripInfo = require('../models/tripInfo')
const TruckInfo = require('../models/truckInfo')
const User = require('../models/user')

module.exports = {
    greeting(req, res) {
       res.send({hi: 'there'})
    },


}