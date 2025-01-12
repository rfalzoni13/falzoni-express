require('dotenv').config()

const sqliteConnection = require('knex')({
  client: process.env.DB_DRIVER,
  connection: {
    filename: process.env.DB_DATABASE,
  },
});

module.exports = sqliteConnection
