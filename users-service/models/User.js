const mongoose = require('mongoose')
const SkillSchema = require('./Skill')
const ExperienceSchema = require('./Experience')
const AccountStatusSchema = require('./AccountStatus')

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    bio: String,
    address: String,
    username: String,
    email: String,
    password: String,
    role: String,
    skills: [SkillSchema],
    experiences: [ExperienceSchema],
    status: String,
    accountStatus: AccountStatusSchema
})

module.exports = mongoose.model('User', userSchema)