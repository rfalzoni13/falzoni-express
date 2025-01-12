const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const logMessenger = require('../../../src/utils/logMessenger')
const { randomUUID } = require('crypto')
const { userSeed } = require('../../seeders/configuration/userSeeder')
const { after, before } = require('mocha')
const UserRepository = require('../../../src/repositories/configuration/userRepository')
const { SqliteError } = require('better-sqlite3')

const expect = chai.expect
const assert = chai.assert

chai.use(chaiAsPromised)

let repository

describe("test for user repository", () => {
    before(async() => {
        try {
            logMessenger.createLogInfo("Iniciando testes do repositório de usuário")
            repository = new UserRepository()
            await userSeed()
        } catch(error) {
            logMessenger.createLogError(error.stack)
        }
    })

    it('should be users return success when get all', async () => {
        const users = await repository.getAll()
        await assert.isTrue(users.length > 0)
    })

    it('should be user return success when get by id', async () => {
        const user = await repository.get("15dbc8f7-26d1-43a6-bd36-5cc2ab40e9b5")
        await assert.notEqual(user, null)
    })

    it('should be user return empty when get by wrong id', async () => {
        const user = await repository.get("15dbc8f7-26d1-43a6-bd36-5cc2ab40e9b6")
        await assert.equal(user, null)
    })

    it('should be return success when create user', async () => {
        const user = { 
            id: randomUUID(),
            fullName: "Seiya de Pégaso",
            userName: "pegasoSeiya",
            password: "123456",
            email: "seiyadepegaso@hotmail.com",
            phoneNumber: "(11) 2222-2222",
            role: "ADMIN"
        }
        await repository.create(user)
    })

    it('should be return failure when create user', async () => {
        const user = {
            id: randomUUID(),
            fullName: null,
            userName: null,
            password: "123456",
            email: "seiyadepegaso@hotmail.com",
            phoneNumber: "(11) 2222-2222",
            role: "ADMIN"
        }
        await expect(repository.create(user)).to.be.rejectedWith(SqliteError)
    })

    it('should be return success when update user', async () => {
        const user = await repository.get("15dbc8f7-26d1-43a6-bd36-5cc2ab40e9b5")
        user.fullName = "Cargueiro atômico"
        user.phoneNumber = "(11) 92212-2121"
        await repository.update(user)
    })

    it('should be return failure when update user', async () => {
        const user = await repository.get("15dbc8f7-26d1-43a6-bd36-5cc2ab40e9b5")
        user.userName = null
        await expect(repository.update(user)).to.be.rejectedWith(SqliteError)
    })

    it('should be return success when delete user', async () => {
        await repository.delete("c03dfb78-0611-4caa-b923-86652fbad891")
    })

    after(async() => {
        logMessenger.createLogInfo("Desconectado da base de dados")
        logMessenger.createLogInfo("Finalizando testes do repositório de usuário")
    })
})