const User = require('../models/User')

const getAllUser = async (req, res, next) => {
    try {
        const users =  await User.find()
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (req, res, next) => {
    try {
        console.log("masuk");
    } catch (error) {
        console.log(error);
    }
}

const registerUser = async (req, res, next) => {
    try {
        console.log("Sampai sini");
        const { username, email, password, role } = req.body
        await User.create({
            username, email, password, role
        })
    } catch (error) {
        console.log("Masuk1");
        console.log(error);
    }
}

const updateUser = async (req, res, next) => {
    try {
        console.log("masuk");
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        console.log("masuk");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllUser, getUserById, registerUser, updateUser, deleteUser
}