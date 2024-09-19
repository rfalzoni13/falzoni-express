var BaseService = require('../base/baseService')
var UserRepository = require('../../repositories/configuration/userRepository')

class UserService extends BaseService {
    constructor() {
        super()
        this.repository = new UserRepository()
    }

    create = (obj) => {
        obj.datebirth = obj.datebirth.split('T')[0]
        return super.create(obj)
    }

    update = (obj) => {
        obj.datebirth = obj.datebirth.split('T')[0]
        return super.update(obj) 
    }
}

module.exports = UserService