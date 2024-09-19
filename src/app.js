require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const middlewares = require('./middlewares')
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./utils/swaggerDoc')

const server = express()
const port = process.env.PORT

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

// Load routes
server.use('/api', router)

// Load Swagger Definitions
server.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

// Redirect to Swagger
server.use('/', function(req, res, next) {
    return res.redirect('/api/swagger')
})

server.use(middlewares.errorHandler)
server.use(middlewares.notFound)

server.listen(port, () => {
    console.log(`Aplicação iniciada na porta ${port}`)
})