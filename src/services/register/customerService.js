const BaseService = require('../base/baseService')
const CustomerRepository = require('../../repositories/register/customerRepository')

class CustomerService extends BaseService {
    constructor() {
        super()
        this.repository = new CustomerRepository()
    }
}

module.exports = CustomerService