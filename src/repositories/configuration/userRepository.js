const BaseRepository = require("../base/baseRepository");

class UserRepository extends BaseRepository {
    constructor() {
        super()
        this.tableName = 'user'
    }

    async getByEmailOrUsername(userName) {
        const obj = await this.db.select().table(this.tableName)
            .where('user_name', userName)
            .orWhere('email', userName).limit(1)
        return obj[0]
    }
}

module.exports = UserRepository