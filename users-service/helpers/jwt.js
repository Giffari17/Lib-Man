const jwt = require('jsonwebtoken')
const signPayload = (payload) => {
    return jwt.sign(payload, process.env.JWT_TOKEN)
}

const verifyToken = () => {

}

module.exports = {
    signPayload, verifyToken
}