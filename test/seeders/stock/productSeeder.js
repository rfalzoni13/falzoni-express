const db = require('../../../src/db')

const productSeed = async () => {
    await db.schema.createTable('product', (table) => {
        table.uuid("id").defaultTo(db.fn.uuid()).primary()
        table.string('name', 512).notNullable()
        table.decimal('price', 18, 2).notNullable()
        table.decimal('discount', 18, 2).notNullable()
    })
    await db.insert({
        id: "ba32c78a-465a-46aa-ade1-0e3fecbf802b",
        name: "Caderno Power Rangers",
        price: 29.99,
        discount: 0.00
    }).into('product')
    await db.insert({
        id: "832a2071-bad3-4c1a-839e-6373186ed77c",
        name: "Video Game Super Nintendo",
        price: 399.99,
        discount: 40.00
    }).into('product')
    await db.insert({
        id: "b2b8ad3f-c054-4220-b75d-66e0dcdb478e",
        name: "Notebook Gamer",
        price: 8999.99,
        discount: 25.00
    }).into('product')
}

module.exports = { 
    productSeed
}