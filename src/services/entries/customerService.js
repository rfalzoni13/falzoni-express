var BaseService = require('../base/baseService')
var CustomerRepository = require('../../repositories/entries/customerRepository')

class CustomerService extends BaseService {
    constructor() {
        super()
        this.repository = new CustomerRepository()
    }
}

module.exports = CustomerService