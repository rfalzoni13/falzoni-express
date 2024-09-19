const db = require('../../db')

class BaseRepository {
    constructor() {
        this.tableName = undefined
    }
    
    getAll() {
        return db.select().table(this.tableName)
    }

    get(id) {
        return db.select().table(this.tableName).where('id', id)
    }

    create(obj) {
        return db.insert(obj).into(this.tableName)
    }

    update(obj) {
        return db(this.tableName).where({id: obj.id}).update(obj)
    }

    delete(id) {
        return db(this.tableName).where({id}).del()
    }
}

module.exports = BaseRepository