const ComicRouter = require('express').Router()
const ComicController = require('../controllers/comic')

ComicRouter.get('/', ComicController.list)
ComicRouter.put('/:id', ComicController.update)

module.exports = ComicRouter