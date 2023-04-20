const express = require('express');

const UserController = require("../Controller/UserController")
const router = express.Router();
const authMiddleware = require('../Middleware/jwt');

router.post('/NewUser',UserController.createUser)
router.post('/otpverfication',UserController.otpVerification)
router.get('/find',authMiddleware,UserController.getUsers)
router.post('/login',UserController.login)
router.post('/message',UserController.message)
router.post('/resent',UserController.resendotp)

module.exports = router