const db = require('../../../src/db')

const customerSeed = async () => {
    await db.schema.createTable('customer', (table) => {
        table.uuid("id").defaultTo(db.fn.uuid()).primary()
        table.string('name', 128).notNullable()
        table.string('document', 256).notNullable()
    })
    await db.insert({
        id: "59ac5877-6017-4d89-9013-110de91c444c",
        name: "Saori Kido",
        document: "321.456.987-12",
    }).into('customer')
    await db.insert({
        id: "b6d833ff-1563-46cd-b529-22836b846128",
        name: "Metal Greymon",
        document: "987.456.112-01",
    }).into('customer')
    await db.insert({
        id: "610b1b76-a278-4f88-8d6d-4c33c831b2da",
        name: "Mano War",
        document: "123.123.321-11",
    }).into('customer')
    await db.insert({
        id: "95d51124-1858-4725-9359-6861a3012a1b",
        name: "Shao Kahn",
        document: "111.222.333-66",
    }).into('customer')
}

module.exports = {
    customerSeed
}