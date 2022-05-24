const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    name: String,
    tags: {
        name: [String]
    }
})

module.export = mongoose.model('Skill', skillSchema)