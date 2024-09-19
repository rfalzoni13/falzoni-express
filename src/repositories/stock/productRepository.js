const BaseRepository = require("../base/baseRepository");

class ProductRepository extends BaseRepository {
    constructor() {
        super()
        this.tableName = 'product'
    }
}

module.exports = ProductRepository