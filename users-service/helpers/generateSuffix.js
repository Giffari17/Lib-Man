const randomString = require('randomstring')

const generateRandomString = () => {
    const numbericRand = randomString.generate({
        length: 3,
        charset: 'numeric'
    })
    const alpahbetRand = randomString.generate({
        length: 5,
        charset: 'alphabetic'
    })
    return randomString.generate({
        length: 10,
        charset: `${numbericRand}${alpahbetRand}`
    })
}

module.exports = generateRandomString