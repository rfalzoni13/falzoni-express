const BaseRepository = require("../base/baseRepository");

class CustomerRepository extends BaseRepository {
    constructor() {
        super()
        this.tableName = 'customer'
    }
}

module.exports = CustomerRepository