const BaseController = require('../base/baseController')
const ProductService = require('../../services/stock/productService')

class ProductController extends BaseController {
    constructor() {
        super()
        this.service = new ProductService()
    }
}

module.exports = ProductController