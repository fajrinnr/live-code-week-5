const IndexRouter = require('express').Router()
const ComicRouter = require('./comic')
const UserRouter = require('./user')
const authentication = require('../middlewares/authentication')

IndexRouter.use('/', UserRouter)
IndexRouter.use(authentication)
IndexRouter.use('/comics', ComicRouter)

module.exports = IndexRouter