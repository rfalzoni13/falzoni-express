const tokenSchema = {
    title: 'Token',
    type: 'object',
    properties: {
        token: {
            type: 'string',
            description: 'Token de retorno',
            example: 'XxXxXxxXxxXxxxxXXXXXXxXxXXXXXxXXXXXXXxxxXxXXXxXXXXXX',
        },
        expiresIn: {
            type: 'string',
            format: 'date-time',
            description: 'Data de expiração do token',
            example: '2025-01-05T19:31:55.000'
        },
    },
    additionalProperties: false,
    description: 'Objeto do token'
}

module.exports = tokenSchema