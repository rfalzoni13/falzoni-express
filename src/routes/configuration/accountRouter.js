const express = require('express')

const accountRouter = express.Router()

accountRouter.post('/login', function(req, res, next) {
    return userController.login(req, res, next)
})

module.exports = accountRouter