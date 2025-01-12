const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Falzoni Node Js',
            version: '1.0.0',
            description: "Versão em Node.js com Express da Api de demonstração Falzoni"
        },
    },
    apis: ['./src/routes/*/*.js']
}

const swaggerDoc = swaggerJsdoc(swaggerOptions)

module.exports = swaggerDoc