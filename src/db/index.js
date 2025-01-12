const appConfiguration = require('../utils/appConfiguration')

appConfiguration.loadConfiguration()

let db = undefined

switch(process.env.DB_DRIVER) {
    case 'mysql':
    case 'mysql2':
        db = require('./mysql')
    case 'sqlite':
    case 'sqlite3':
    case 'better-sqlite3':
        db = require('./sqlite')
    }


module.exports = db