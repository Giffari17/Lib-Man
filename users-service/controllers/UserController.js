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
        const { 
            firstname, lastname, companyName, 
            address, username, email, password,
            status
        } = req.body
        const { role } = req.query
        const resp = await User.create({
            firstname, lastname, 
            companyName, address, username, 
            email, password, role, status
        })

        // switch (role) {
        //     case 'superadmin':

        //         break
        //     case 'employeer':
        //         break
        //     case 'employee':
        // }
        // res.status(201).json()
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