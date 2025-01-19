const bcrypt = require('bcryptjs')
const { hash } = require('crypto')

const passwordUtil = {
    hashPassword(pass) {
        return bcrypt.hashSync(pass)       
    },
    verifyPassword(password, hashPassword) {
        return bcrypt.compareSync(password, hashPassword)
    }
}

module.exports = passwordUtil