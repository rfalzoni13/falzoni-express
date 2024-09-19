require('dotenv').config()

const mysqlConnection = require('knex')({
  client: process.env.DB_DRIVER,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

module.exports = mysqlConnection
