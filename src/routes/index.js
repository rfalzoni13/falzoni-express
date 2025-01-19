const router = require('express').Router()
const middlewares = require('../middlewares');
const userRouter = require("./configuration/userRouter");
const accountRouter = require("./configuration/accountRouter");
const customerRouter = require("./register/customerRouter");
const productRouter = require("./stock/productRouter");

router.use('/account', accountRouter)
router.use('/users', middlewares.verifyJWT, userRouter)
router.use('/customers', middlewares.verifyJWT, customerRouter)
router.use('/products', middlewares.verifyJWT, productRouter)

module.exports = router