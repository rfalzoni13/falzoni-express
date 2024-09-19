const UserService = require('../../services/configuration/userService')
const BaseController = require('../base/baseController')

class UserController extends BaseController {
    constructor() {
        super()
        this.service = new UserService()
    }
}

module.exports = UserController