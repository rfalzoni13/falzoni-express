const db = require('../../../src/db')
const passwordUtil = require('../../../src/utils/passwordUtil')

const userSeed = async () => {
    await db.schema.createTable('user', (table) => {
        table.uuid("id").defaultTo(db.fn.uuid()).primary()
        table.string('full_name', 256).notNullable()
        table.string('user_name', 256).notNullable()
        table.text('password')
        table.string('email', 256).notNullable()
        table.string('phone_number', 128).notNullable()
        table.string('role', 20).notNullable()
    })
    await db.insert({
        id: "15dbc8f7-26d1-43a6-bd36-5cc2ab40e9b5",
        full_name: "James Hetfield",
        user_name: "jhetfield",
        password: passwordUtil.hashPassword("123456"),
        email: "jameshetfield@hotmail.com",
        phone_number: "(44) 2222-2222",
        role: "ADMIN"
    }).into('user')
    await db.insert({
        id: "19bdb45d-795c-4c21-a156-3c25f6b34039",
        full_name: "Roronoa Zoro",
        user_name: "roronoaz",
        password: passwordUtil.hashPassword("654321"),
        email: "zoro_r@gmail.com",
        phone_number: "(55) 3333-3333",
        role: "USER"
    }).into('user')
    await db.insert({
        id: "c03dfb78-0611-4caa-b923-86652fbad891",
        full_name: "Sasuke Uchira",
        user_name: "suchira",
        password: passwordUtil.hashPassword("321987"),
        email: "sasuke_uchira_ninja@yahoo.com",
        phone_number: "(11) 4444-4444",
        role: "USER"
    }).into('user')
}

module.exports = { 
    userSeed
}