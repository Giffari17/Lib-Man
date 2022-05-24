const mongoose = require('mongoose')

const accontStatusSchema = new mongoose.Schema({
    name: String,
    lastLoggedIn: Date
})

module.export = mongoose.model('AccontStatus', accontStatusSchema)