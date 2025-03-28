const userSchema = require('./configuration/userSchema')
const customerSchema = require('./register/customerSchema')
const productSchema = require('./stock/productSchema')

const schemas = {
    userSchema,
    customerSchema,
    productSchema
}

module.exports = schemas