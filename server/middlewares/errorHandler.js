module.exports = (err, req, res, next) => {
    if (err.message){
        res.status(401).json(err.message)
    } else if (err.name == 'JsonWebTokenError'){
        res.status(401).json({message : 'Invalid Token'})
    } else {
        res.sendStatus(500)
    }
}