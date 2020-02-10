const UserRouter = require('express').Router()
const UserController = require('../controllers/user')

UserRouter.post('/login', UserController.login)
UserRouter.post('/register', UserController.register)


module.exports = UserRouter