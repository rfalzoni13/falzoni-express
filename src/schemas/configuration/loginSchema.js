const loginSchema = {
    title: 'Login',
    type: 'object',
    properties: {
        userName: {
            type: 'string',
            description: 'Login de usuário',
            example: 'usertest',
        },
        password: {
            type: 'string',
            description: 'Senha do usuário',
            example: 'Test12345'
        },
    },
    additionalProperties: false,
    description: 'Objeto de login'
}

module.exports = loginSchema