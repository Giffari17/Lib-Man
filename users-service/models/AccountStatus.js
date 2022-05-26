const mongoose = require('mongoose')

const accountBSON = {
    status: {
        type: String,
        default: 'Inactive'
    },
    created: {
        type: Date,
        default: Date.now()
    },
    lastLoggedIn: {
        type: Date,
        default: Date.now()
    }
}
const accountStatusSchema = new mongoose.Schema(accountBSON)
const Account = mongoose.model('AccontStatus', accountStatusSchema)

module.exports = {
    Account, accountBSON
}