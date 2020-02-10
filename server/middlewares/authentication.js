const {verify} = require('../helpers/jwt')

module.exports = (req, res, next) => {
    try {
        const access_token = req.headers.access_token
        const user = verify(access_token)
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}