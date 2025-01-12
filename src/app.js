const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const middlewares = require('./middlewares')
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./utils/swaggerDoc')
const logMessenger = require('./utils/logMessenger')
const appConfiguration = require('./utils/appConfiguration')

appConfiguration.loadConfiguration()

logMessenger.createLogInfo("Configurando o servidor")
const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

logMessenger.createLogInfo("Carregando rotas")
// Load routes
app.use('/api', router)

logMessenger.createLogInfo("Carregando configurações do Swagger")
// Load Swagger Definitions
app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

// Redirect to Swagger
app.use('/', function(req, res, next) {
    return res.redirect('/api/swagger')
})

logMessenger.createLogInfo("Carregando middlewares")
app.use(middlewares.errorHandler)
app.use(middlewares.notFound)

const server = app.listen(port, () => {
    logMessenger.createLogSuccess(`Aplicação iniciou na porta ${port}`)
})

process.on('SIGTERM', () => shutdown())
process.on('SIGINT', () => shutdown())
process.on('SIGKILL', () => shutdown())
process.on('SIGQUIT', () => shutdown())
process.on('SIGHUP', () => shutdown())

function shutdown() {
    server.close((_) => {
        logMessenger.createLogWarning(`Encerrando servidor...`)
    })
}