const mongoose = require('mongoose')
const SkillSchema = require('./Skill')
const ExperienceSchema = require('./Experience')
const AccountStatusSchema = require('./AccountStatus')
const { hashPassword } = require('../helpers/bcrypt')
const generateRandomString = require('../helpers/generateSuffix')

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    bio: String,
    address: String,
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: String,
    skills: [SkillSchema],
    experiences: [ExperienceSchema],
    status: String,
    accountStatus: AccountStatusSchema
})

userSchema.pre('save', function(next) {
    this.password = hashPassword(this.password)
    if(this.role === 'superadmin') {
        this.username = 'super-' + generateRandomString()
    }
    next()
})

module.exports = mongoose.model('User', userSchema)