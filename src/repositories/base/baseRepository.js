const db = require('../../db')

class BaseRepository {
    constructor() {
        this.tableName = undefined
    }

    async getAll() {
        return await db.select().table(this.tableName)
    }

    async get(id) {
        const obj = await db.select().table(this.tableName).where('id', id).limit(1)
        return obj[0]
    }

    async create(obj) {
        await db.insert(obj).into(this.tableName)
    }

    async update(obj) {
        await db(this.tableName).where({ id: obj.id }).update(obj)
    }

    async delete(id) {
        await db(this.tableName).where({ id }).del()
    }
}

module.exports = BaseRepository