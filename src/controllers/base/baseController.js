const BaseService = require("../../services/base/baseService")

class BaseController {
    constructor() {
        this.service = new BaseService()
    }

    getAll(req, res, next) {
        try {
            this.service.getAll().then(function (result) {
                if (result.length == 0) {
                    return res.status(400).json({ statusCode: 400, message: "Usuário não encontrado!" })
                }
                return res.json(result)
            })
        } catch (e) {
            next(e)
        }
    }

    get(req, res, next) {
        try {
            if (req.params.id === undefined) {
                return res.status(400).json({ statusCode: 400, message: "Parâmetro inválido" })
            }

            this.service.get(req.params.id).then(function (result) {
                console.log(result)
                if (result.length == 0) {
                    return res.status(400).json({ statusCode: 400, message: "Usuário não encontrado!" })
                }
                return res.json(result)
            })
        } catch (e) {
            next(e)
        }
    }

    create(req, res, next) {
        try {
            this.service.create(req.body)
                .then(function () {
                    return res.json({ message: "registro incluído com sucesso" })
                })
                .catch(function (error) {
                    console.log(error)
                    return res.json({ statusCode: 400, message: error.sqlMessage })
                })
        } catch (e) {
            next(e)
        }
    }

    update(req, res, next) {
        try {
            this.service.update(req.body)
                .then(function () {
                    return res.json({ message: "registro atualizado com sucesso" })
                })
                .catch(function (error) {
                    console.log(error)
                    return res.json({ statusCode: 400, message: error.sqlMessage })
                })
        } catch (e) {
            next(e)
        }
    }

    delete(req, res, next) {
        try {
            this.service.delete(req.params.id)
                .then(function () {
                    return res.json({ message: "registro removido com sucesso" })
                })
                .catch(function (error) {
                    console.log(error)
                    return res.json({ statusCode: 400, message: error.sqlMessage })
                })
        } catch (e) {
            next(e)
        }
    }
}

module.exports = BaseController