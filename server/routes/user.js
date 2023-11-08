const express = require('express')
const userController = require('../controllers/user')
const {authenticate} = require('../middleware/auth')

const router = express.Router()

router.get('/get-userInfo',authenticate,userController.getUserDetail)

module.exports = router