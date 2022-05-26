const express = require('express')
const router = express.Router()
const { authController } = require('../controllers/AuthController')
const UserRouter = require('./userRoutes')

// Auth
router.post('/login', authController)
// CRUD User
router.use('/users', UserRouter)

module.exports = router
