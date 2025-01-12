const router = require('express').Router()
const userRouter = require("./configuration/userRouter");
const customerRouter = require("./register/customerRouter");
const productRouter = require("./stock/productRouter");

router.use('/users', userRouter)
router.use('/customers', customerRouter)
router.use('/products', productRouter)

module.exports = router