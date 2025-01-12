const middlewares = {
  notFound: function(req, res, next) {
    statusCode = 404
    const error = { statusCode, message: 'Método ou serviço não encontrado'}
    res.status(statusCode).json(error)
  },

  errorHandler: function(err, req, res, next) {
    console.log(err.stack)
    res.status(err.status || 400).json({
      statusCode: err.status,
      message: err.message,
    })
  }
}

  module.exports = middlewares
  