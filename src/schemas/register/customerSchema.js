const customerSchema = {
    title: 'Customer',
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'Id de registro',
            format: 'uuid',
            example: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
            readonly: true
        },
        name: {
            type: 'string',
            description: 'Nome do cliente',
            example: 'Test Customer'
        },
        document: {
            type: 'string',
            description: 'Documento do cliente',
            example: '123.456.789-00'
        },
        created: {
            type: 'string',
            format: 'date-time',
            description: 'Data de criação de registro',
            example: '2025-01-05T19:31:55.000'
        },
        modified: {
            type: 'string',
            description: 'Data de modificação de registro',
            example: '2025-02-10T14:56:39.000'
        }
    },
    additionalProperties: false,
    description: 'Objeto do cliente'
}

module.exports = customerSchema