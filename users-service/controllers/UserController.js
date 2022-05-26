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
        let resp = await User.create({
            firstname, lastname, 
            companyName, address, username, 
            email, password, role, status
        })
        console.log(resp)
        switch (resp.role) {
            case 'superadmin':
                resp = {
                    username: resp.username,
                    email: resp.email
                }
                break
            default:
                resp = {
                    email: resp.email
                }
        }
        res.status(201).json(resp)
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