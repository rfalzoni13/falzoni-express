const BaseRepository = require("../base/baseRepository");

class UserRepository extends BaseRepository {
    constructor() {
        super()
        this.tableName = 'user'
    }
}

module.exports = UserRepository