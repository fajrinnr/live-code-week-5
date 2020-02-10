const jwt = require('jsonwebtoken')

function createToken(user) {
  return jwt.sign(user, process.env.SECRET_CODE)
}

function verify(token) {
  return jwt.verify(token, process.env.SECRET_CODE)
}

module.exports = {
  createToken,
  verify
}