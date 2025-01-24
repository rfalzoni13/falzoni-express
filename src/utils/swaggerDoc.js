const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Falzoni Node Js',
            version: 'v1',
            description: "Versão em Node.js com Express da Api de demonstração Falzoni"
        },
        components: {
            securitySchemes: {
              Bearer: {
                name: "Authorization",
                description: "Token de autorização (JWT) a ser inserido",
                in: "header",
                type: "apiKey",
                scheme: "bearer",
                bearerFormat: "JWT",
              },
            },
          },
          security: [
            {
              Bearer: [],
            },
          ],
    },
    apis: ['./src/routes/*/*.js']
}

const swaggerDoc = swaggerJsdoc(swaggerOptions)

module.exports = swaggerDoc