const BaseRepository = require("../../repositories/base/baseRepository")
const ApplicationError = require("../../errors/applicationError")
const { v4: uuidv4 } = require('uuid')

class BaseService {
    constructor() {
        this.repository = new BaseRepository()
    }

    getAll() {
        return this.repository.getAll()
    }


    get(id) {
        return this.repository.get(id)
    }

    create(obj) {
        if(obj === undefined) 
            throw new ApplicationError("objeto não definido pelo usuário", 400)
            
        obj.id = uuidv4()
        return this.repository.create(obj)
    }

    update(obj) {
        if(obj === undefined || obj.id === undefined) 
            throw new ApplicationError("objeto não definido pelo usuário", 400)

        return this.repository.update(obj)
    }

    delete(id) {
        if(id === undefined) 
            throw new ApplicationError("Id do usuário não encontrado", 400)

        return this.repository.delete(id)
    }
}

module.exports = BaseService