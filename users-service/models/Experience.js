const mongoose = require('mongoose')

const experienceBSON = {
    companyName: String,
    role: String,
    type: {
        type: String
    },
    period: String
}
const experienceSchema = new mongoose.Schema(experienceBSON)
const Experince = mongoose.model('Experience', experienceSchema)

module.exports = {
    Experince, experienceBSON
}