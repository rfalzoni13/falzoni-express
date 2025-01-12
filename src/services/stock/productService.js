var BaseService = require('../base/baseService')
var ProductRepository = require('../../repositories/stock/productRepository')

class ProductService extends BaseService {
    constructor() {
        super()
        this.repository = new ProductRepository()
    }
}

module.exports = ProductService