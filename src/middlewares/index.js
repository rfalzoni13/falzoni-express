const logMessenger = require('../utils/logMessenger')
const jwt = require('jsonwebtoken')

const middlewares = {
  notFound: function (req, res, next) {
    statusCode = 404
    logMessenger.createLogError('Método ou serviço não encontrado')
    const error = { status: statusCode, message: 'Método ou serviço não encontrado' }
    next(error)
  },

  errorHandler: function (err, req, res, next) {
    if (err.stack !== undefined) {
      logMessenger.createLogError(err.stack)
    }
    res.status(err.status || 400)
    res.json({
      status: res.statusCode,
      message: err.message
    })
  },

  verifyJWT: function (req, res, next) {
    let token = req.headers["authorization"]
    

    if (!token) {
      const statusCode = 401
      const message = "Você não está autorizado a ver este conteúdo"
      logMessenger.createLogError(message)

      res.status(statusCode)
      return res.json({
        status: statusCode,
        message: "Você não está autorizado a ver este conteúdo"
      })
    }

    token = token.replace('Bearer ', '')
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err) {
        const statusCode = 403
        const message = "Suas credenciais possui acesso proibido"
        logMessenger.createLogError(message)
        logMessenger.createLogError(err)

        res.status(statusCode)
        return res.json({
          status: statusCode,
          message: message
        })
      }

      req.obj = decoded.obj
      next()
    })
  }
}

module.exports = middlewares
