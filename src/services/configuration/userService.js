var BaseService = require('../base/baseService')
var UserRepository = require('../../repositories/configuration/userRepository')

class UserService extends BaseService {
    constructor() {
        super()
        this.repository = new UserRepository()
    }

    async create(obj) {
        obj.datebirth = obj.datebirth.split('T')[0]
        return await super.create(obj)
    }

    async update(obj) {
        obj.datebirth = obj.datebirth.split('T')[0]
        return await super.update(obj) 
    }
}

module.exports = UserService