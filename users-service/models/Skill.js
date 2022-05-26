const mongoose = require('mongoose')

const skillBSON = {
    name: String,
    tags: {
        name: [String]
    }
}
const skillSchema = new mongoose.Schema(skillBSON)
const Skill = mongoose.model('Skill', skillSchema)

module.exports = {
    Skill, skillBSON
}