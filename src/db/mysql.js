require('dotenv').config()

const mysqlConnection = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'Renato',
    password: 'SaintSeiya013',
    database: 'falzoninode',
  },
});

module.exports = mysqlConnection
