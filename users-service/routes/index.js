const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const UserRouter = require('./userRoutes')

// Auth
router.post('/login', AuthController)
// CRUD User
router.use('/users', UserRouter)

module.exports = router
