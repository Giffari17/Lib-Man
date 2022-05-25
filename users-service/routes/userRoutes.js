const express = require('express')
const router = express.Router()
const { getAllUser, getUserById, registerUser, updateUser, deleteUser } = require('../controllers/UserController')

router.get('/', getAllUser)
router.get('/:id', getUserById)
router.post('/', registerUser)
router.put('/', updateUser)
router.delete('/', deleteUser)

module.exports = router