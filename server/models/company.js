const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const PointSchema = new Schema({
//     type: { type: String, default: 'Point'},
//     coordinates: { type: [Number], index: '2dsphere' }
// })

const CompanySchema = new Schema({
   companyName: {
       type: String
   },
   companyId: {
       type: String
   },
   companyRegKey: {
       type: String
   }
})

const Company = mongoose.model('company', CompanySchema)

module.exports = Company