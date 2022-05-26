const mongoose = require('mongoose')

const accountBSON = {
    status: {
        type: String,
        enum: {
            values: ["Inactived", "Actived", "Blocked"]
        },
        default: 'Inactived'
    },
    created: {
        type: Date,
        default: Date.now()
    },
    lastLoggedIn: Date
}
const accountStatusSchema = new mongoose.Schema(accountBSON)
const Account = mongoose.model('AccontStatus', accountStatusSchema)

module.exports = {
    Account, accountBSON
}