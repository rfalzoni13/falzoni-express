const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const logMessenger = require('../../../src/utils/logMessenger')
const { randomUUID } = require('crypto')
const { productSeed } = require('../../seeders/stock/productSeeder')
const { after, before } = require('mocha')
const ProductRepository = require('../../../src/repositories/stock/productRepository')
const { SqliteError } = require('better-sqlite3')

const expect = chai.expect
const assert = chai.assert

chai.use(chaiAsPromised)

let repository

describe("test for product repository", () => {
    before(async() => {
        try {
            logMessenger.createLogInfo("Iniciando testes do repositório de produto")
            repository = new ProductRepository()
            await productSeed()
        } catch(error) {
            logMessenger.createLogError(error.stack)
        }
    })

    it('should be products return success when get all', async () => {
        const products = await repository.getAll()
        assert.isTrue(products.length > 0)
    })

    it('should be product return success when get by id', async () => {
        const product = await repository.get("b2b8ad3f-c054-4220-b75d-66e0dcdb478e")
        assert.notEqual(product, null)
    })

    it('should be product return empty when get by wrong id', async () => {
        const product = await repository.get("cd2b1b60-3728-446e-b6e2-c43b10811f83")
        assert.equal(product, null)
    })

    it('should be return success when create product', async () => {
        const product = { 
            id: randomUUID(),
            name: "Camiseta Polo Xadrez", 
            price: 19.99,
            discount: 0.00,
            created: Date.now()
        }
        await repository.create(product)
    })

    it('should be return failure when create product', async () => {
        const product = { 
            id: randomUUID(),
            name: null, 
            price: null,
            discount: null,
            created: null
        }
        await expect(repository.create(product)).to.be.rejectedWith(SqliteError)
    })

    it('should be return success when update product', async () => {
        const product = await repository.get("ba32c78a-465a-46aa-ade1-0e3fecbf802b")
        product.name = "Caderno Barbie"
        product.price = 49.99
        product.discount = 5.00
        product.modified = Date.now()
        await repository.update(product)
    })

    it('should be return failure when update product', async () => {
        const product = await repository.get("ba32c78a-465a-46aa-ade1-0e3fecbf802b")
        product.name = null
        await expect(repository.update(product)).to.be.rejectedWith(SqliteError)
    })

    it('should be return success when delete product', async () => {
        await repository.delete("832a2071-bad3-4c1a-839e-6373186ed77c")
    })

    after(async() => {
        logMessenger.createLogInfo("Finalizando testes do repositório de produto")
    })
})