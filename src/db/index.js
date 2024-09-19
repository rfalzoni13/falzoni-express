require('dotenv').config()

let db = undefined

switch(process.env.DB_DRIVER) {
    case 'mysql':
    case 'mysql2':
        db = require('./mysql')
    }


module.exports = db