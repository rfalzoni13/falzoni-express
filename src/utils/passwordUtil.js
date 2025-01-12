const bcrypt = require('bcryptjs')
const { hash } = require('crypto')

const passwordUtil = {
    hashPassword(pass) {
        return hash('md5', pass)       
    },
    verifyPassword(password, hashPassword) {
        return bcrypt.compareSync(password, hashPassword)
    }
}

module.exports = passwordUtil