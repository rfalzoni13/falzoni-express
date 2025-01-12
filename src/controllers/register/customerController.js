const BaseController = require('../base/baseController')
const CustomerService = require('../../services/register/customerService')

class CustomerController extends BaseController {
    constructor() {
        super()
        this.service = new CustomerService()
    }
}

module.exports = CustomerController