const mongoose = require('mongoose')
const { skillBSON } = require('./Skill')
const { experienceBSON } = require('./Experience')
const { accountBSON } = require('./AccountStatus')
const { hashPassword } = require('../helpers/bcrypt')
const generateRandomString = require('../helpers/generateSuffix')

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    companyName: String,
    bio: String,
    address: String,
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password can't be emptied"]
    },
    role: { type: String },
    skills: [skillBSON],
    experiences: [experienceBSON],
    status: String,
    accountStatus: accountBSON
})

userSchema.pre('save', function(next) {
    this.password = hashPassword(this.password)
    if(this.role === 'superadmin') {
        this.username = 'super-' + generateRandomString()
    } else if (this.role === 'employeer' || this.role === 'employee'){
        if(!this.firstname || !this.lastname || !this.username) {
            throw new Error("Emptied Firstname or lastname")
        }
    } else if (this.role === 'employeer') {
        if(!this.companyNames) {
            throw new Error("Emptied company name")
        }
    }
    next()
})

module.exports = mongoose.model('User', userSchema)