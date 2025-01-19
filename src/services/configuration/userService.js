const BaseService = require('../base/baseService')
const UserRepository = require('../../repositories/configuration/userRepository')
const ApplicationError = require('../../errors/applicationError')
const jwt = require('jsonwebtoken')
const passwordUtil = require('../../utils/passwordUtil')

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