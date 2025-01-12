const BaseRepository = require("../../repositories/base/baseRepository")
const ApplicationError = require("../../errors/applicationError")
const { v4: uuidv4 } = require('uuid')

class BaseService {
    constructor() {
        this.repository = new BaseRepository()
    }

    async getAll() {
        return await this.repository.getAll()
    }


    async get(id) {
        return await this.repository.get(id)
    }

    async create(obj) {
        if(obj === undefined) 
            throw new ApplicationError("objeto não definido pelo usuário", 400)
            
        obj.id = uuidv4()
        await this.repository.create(obj)
    }

    async update(obj) {
        if(obj === undefined || obj.id === undefined) 
            throw new ApplicationError("objeto não definido pelo usuário", 400)

        await this.repository.update(obj)
    }

    async delete(id) {
        if(id === undefined) 
            throw new ApplicationError("Id do usuário não encontrado", 400)

        await this.repository.delete(id)
    }
}

module.exports = BaseService