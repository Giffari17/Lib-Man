const express = require('express')
const router = express.Router()
const { getAllUser, getUserById, registerUser, updateUser, deleteUser } = require('../controllers/UserController')
const { resetPassword } = require('../controllers/AuthController')

router.post('/', 
//Khusus superadmin
registerUser)
router.get('/', 
// Khusus superadmin
getAllUser)
router.get('/:id', 
// Khusus superadmin
getUserById)
router.delete('/', 
// Khusus superadmin
deleteUser)
router.put('/', 
// Khusus yang login
updateUser)
router.patch('/', 
// Khusus yang login
resetPassword)

module.exports = router