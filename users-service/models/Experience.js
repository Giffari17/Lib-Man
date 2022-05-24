const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
    companyName: String,
    role: String,
    type: String,
    period: String
})

module.export = mongoose.model('Experience', experienceSchema)