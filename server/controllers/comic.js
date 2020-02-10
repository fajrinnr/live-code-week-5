const {Comic} = require('../models')
const jwt = require('../helpers/jwt')
const bcrypt = require('../helpers/bcrypt')
const createError = require('http-errors')


class ComicController {

    static list(req, res, next){
        Comic.findAll()
        .then(comic => {
            res.status(200).json(comic)
        })
        .catch(err => {
            next(err)
        })
    }

    static update(req, res, next){
        let comicId = {
            where: {
                id: req.params.id
            }
        }
        let updateComic = {
            title: req.body.title,
            author: req.body.author,
            imageUrl: req.body.imageUrl
        }
        Comic.update(updateComic, comicId)
        .then(comic => {
            if (comic[0] == 1){
                res.status(200).json(updateComic)
            } else {
                throw createError(404, {message: {message: 'Not Found Comic'}})
            }
        })
        .catch(error => {
            next(error)
        })
    }

}

module.exports = ComicController