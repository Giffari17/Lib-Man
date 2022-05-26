const User = require('../models/User')

const getAllUser = async (req, res, next) => {
    try {
        const users =  await User.find()
        console.log(users);
    } catch (error) {
        next(error)
    }
}

const getUserById = async (req, res, next) => {
    try {
        console.log("masuk");
    } catch (error) {
        next(error)
    }
}

const registerUser = async (req, res, next) => {
    try {
        const { username, email, password, role } = req.body
        await User.create({
            username, email, password, role
        })
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        console.log("masuk");
    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        console.log("masuk");
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllUser, getUserById, registerUser, updateUser, deleteUser
}