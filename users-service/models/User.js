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
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Not in email form"],
        required: [true, "Email can't be emptied"]
    },
    password: {
        type: String,
        required: [true, "Password can't be emptied"]
    },
    role: { 
        type: String,
        enum: {
            values: ["superadmin", "employeer", "employee"],
            message: "Role is not available"
        } 
    },
    skills: [skillBSON],
    experiences: [experienceBSON],
    status: {
        type: String,
        enum: {
            values: ["Normal", "Don't distrub", "Open To Work", "Hiring"],
            message: "Status is not available"
        },
        default: "Normal"
    },
    accountStatus: accountBSON
})

userSchema.pre('validate', function(next) {
    if(this.role === 'superadmin') {
        this.status = 'Normal'
    }
    if(this.email.length > 25) {
        throw { name: "Email exceed 25 chars" }
    }
    if(this.password.length < 8) {
        throw { name: "Password not up to 8 chars" }
    }
    next()
})
userSchema.pre('save', function(next) {
    this.password = hashPassword(this.password)
    if(this.role === 'superadmin') {
        this.username = 'super-' + generateRandomString()
    } else if (this.role === 'employeer') {
        if(!this.firstname && !this.lastname) {
            throw { name: "Emptied Firstname or lastname" }
        }
        if(!this.companyName) {
            throw { name: "Emptied company name" }
        }
    } else if (this.role === 'employee'){
        if(this.companyName) {
            throw { name: "Company name is existed" }
        }
        if(!this.firstname && !this.lastname) {
            throw { name: "Emptied Firstname or lastname" }
        }
        if(!this.username) {
            throw { name: "Emptied username" }
        }
    }
    next()
})

module.exports = mongoose.model('User', userSchema)