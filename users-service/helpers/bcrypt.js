const bcrypt = require('bcryptjs')

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(process.env.HASH_PASSWORD_KEY, salt);
}

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = {
    hashPassword, comparePassword
}