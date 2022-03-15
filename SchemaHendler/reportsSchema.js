const mongoose = require('mongoose')
const ReportsSchema = mongoose.Schema({
    reportDetails: Object,
    userID: String,
    marketID: String,
    marketName: String,
    cmdtyID: String,
    cmdtyName: String,
    priceUnit: String,
    convFctr: Number,
    price: Number


})

module.exports = ReportsSchema