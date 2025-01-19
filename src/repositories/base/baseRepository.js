const db = require('../../db')

class BaseRepository {
    constructor() {
        this.db = db
        this.tableName = undefined
    }

    async getAll() {
        return await this.db.select().table(this.tableName)
    }

    async get(id) {
        const obj = await this.db.select().table(this.tableName).where('id', id).limit(1)
        return obj[0]
    }

    async create(obj) {
        await this.db.insert(obj).into(this.tableName)
    }

    async update(obj) {
        await this.db(this.tableName).where({ id: obj.id }).update(obj)
    }

    async delete(id) {
        await this.db(this.tableName).where({ id }).del()
    }
}

module.exports = BaseRepository