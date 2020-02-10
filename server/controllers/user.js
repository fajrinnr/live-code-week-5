const {User} = require('../models')
const {createToken} = require('../helpers/jwt')
const {comparePassword} = require('../helpers/bcrypt')
const createError = require('http-errors')

class UserController {

    static login(req, res, next){
        let data = {
            where: {
                email: req.body.email
            }
        }

        User.findOne(data)
        .then((user) => {
            if (comparePassword(req.body.password, user.password)){
                let userData = {
                    id: user.id,
                    email: user.email
                }
                res.status(200).json({access_token: createToken(userData)})
            } else {
                throw createError(404, {message: {message: 'Username / Password wrong'}})
            }
        })
        .catch((err) => {
            next(err)
        });
    }

    static register(req, res, next){
        let data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        User.create(data)
        .then(user => {
            let userData = {
                id: user.id,
                email: user.email
            }
            res.status(200).json({access_token: createToken(userData)})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController