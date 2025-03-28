const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const logMessenger = require('../../../src/utils/logMessenger')
const { randomUUID } = require('crypto')
const { customerSeed } = require('../../seeders/register/customerSeeder')
const { after, before } = require('mocha')
const CustomerRepository = require('../../../src/repositories/register/customerRepository')
const { SqliteError } = require('better-sqlite3')

const expect = chai.expect
const assert = chai.assert

chai.use(chaiAsPromised)

let repository

describe("test for customer repository", () => {
    before(async() => {
        try {
            logMessenger.createLogInfo("Iniciando testes do repositório de cliente")
            repository = new CustomerRepository()
            await customerSeed()
        } catch(error) {
            logMessenger.createLogError(error.stack)
        }
    })

    it('should be customers return success when get all', async () => {
        const customers = await repository.getAll()
        assert.isTrue(customers.length > 0)
    })

    it('should be customer return success when get by id', async () => {
        const customer = await repository.get("b6d833ff-1563-46cd-b529-22836b846128")
        assert.notEqual(customer, null)
    })

    it('should be customer return empty when get by wrong id', async () => {
        const customer = await repository.get("d9f18dd3-dfcd-40f1-b739-f9fb250e514e")
        assert.equal(customer, null)
    })

    it('should be return success when create customer', async () => {
        const customer = {
            id: randomUUID(),
            name: "Ikki de Fênix",
            document: "654-789-445-01",
            created: Date.now()
        }
        await repository.create(customer)
    })

    it('should be return failure when create customer', async () => {
        const customer = {
            id: randomUUID(),
            name: null, 
            document: null, 
            created: null
        }
        await expect(repository.create(customer)).to.be.rejectedWith(SqliteError)
    })

    it('should be return success when update customer', async () => {
        const customer = await repository.get("610b1b76-a278-4f88-8d6d-4c33c831b2da")
        customer.name = "Barata tonta"
        customer.document = "655.498.772-47"
        customer.modified = Date.now()
        await repository.update(customer)
    })

    it('should be return failure when update customer', async () => {
        const customer = await repository.get("610b1b76-a278-4f88-8d6d-4c33c831b2da")
        customer.name = null
        await expect(repository.update(customer)).to.be.rejectedWith(SqliteError)
    })

    it('should be return success when delete customer', async () => {
        await repository.delete("95d51124-1858-4725-9359-6861a3012a1b")
    })

    after(async() => {
        logMessenger.createLogInfo("Finalizando testes do repositório de cliente")
    })
})