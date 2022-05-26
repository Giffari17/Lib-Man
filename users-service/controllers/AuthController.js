const User = require('../models/User')
const { signPayload } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')
const authController = async (req, res, next) => {
    try {
       const { email, username, password } = req.body
       const userByEmail = await User.findOne({ email }).exec()
       let payload
       if (!userByEmail) {
           const userByUsername = await User.findOne({ username }).exec()
           if(!userByUsername) {
               throw { message: "Can't find user" }
           }
           if(userByUsername.accountStatus.status === 'Inactivated') {
               throw { message: "Can't find user" }
           }
           const isPasswordCorrect = comparePassword(password, userByUsername.password)
           if(!isPasswordCorrect) {
            throw { message: "Incorrect password" }
           }
           payload = {
            username, email, role: userByUsername.role
        }
        } else {
            if(userByEmail.role === 'superadmin') {
                throw { message: "Can't find user" }
            }
            const isPasswordCorrect = comparePassword(password, userByEmail.password)
            if(!isPasswordCorrect) {
                throw { message: "Incorrect password" }
            }
            payload = {
                email, role: userByEmail.role
            }
       }
       const authToken = signPayload(payload)
       res.status(200).json({
           authToken
       })
    } catch (error) {
        next(error)
    }
}

const resetPassword = (req, res, next) => {

}

const verifyAccount = (req, res, next) => {
    const { verifyToken } = req.query
    // Jadikan verifyToken payload lagi
    // Check akun di database username dan password apakah benar
    // Akun jadi aktif
}

module.exports = {
    authController, resetPassword, verifyAccount
}