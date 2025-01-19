const BaseService = require('../base/baseService')
const ProductRepository = require('../../repositories/stock/productRepository')

class ProductService extends BaseService {
    constructor() {
        super()
        this.repository = new ProductRepository()
    }
}

module.exports = ProductService