const userSchema = require('./configuration/userSchema')
const loginSchema = require('./configuration/loginSchema')
const tokenSchema = require('./configuration/tokenSchema')
const customerSchema = require('./register/customerSchema')
const productSchema = require('./stock/productSchema')

const schemas = {
    customerSchema,
    loginSchema,
    productSchema,
    tokenSchema,
    userSchema
}

module.exports = schemas