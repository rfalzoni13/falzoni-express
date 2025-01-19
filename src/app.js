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
const port = process.env.port

app.use(bodyParser.json())
app.use(express.json())

// Load routes
logMessenger.createLogInfo("Carregando rotas")
app.use('/api', router)

// Load Swagger Definitions
logMessenger.createLogInfo("Carregando configurações do Swagger")
app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.get('/api/swagger.json', (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.send(swaggerDoc)
})

// Middlewares
logMessenger.createLogInfo("Carregando middlewares")
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

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