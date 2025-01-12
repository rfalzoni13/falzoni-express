const logMessenger = require('../../utils/logMessenger')
const BaseService = require("../../services/base/baseService")

class BaseController {
    constructor() {
        this.service = new BaseService()
    }

    getAll(req, res, next) {
        try {
            logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
            this.service.getAll().then(function (result) {
                logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno ${JSON.stringify(result)}`)
                return res.json(result)
            }).catch((err) => {
                logMessenger.createLogError(`Requisição retornou um erro: ${JSON.stringify(err)}`)
                return res.json({ statusCode: 400, message: err.sqlMessage })
            })
        } catch (e) {
            logMessenger.createLogWarning(`Ocorreu um erro na requisição!`)
            next(e)
        }
    }

    get(req, res, next) {
        try {
            if (req.params.id === undefined) {
                logMessenger.createLogWarning(`Parâmetro inválido!`)
                return res.status(400).json({ statusCode: 400, message: "Parâmetro inválido" })
            }

            logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
            this.service.get(req.params.id).then(function (result) {
                logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno ${JSON.stringify(result)}`)
                return res.json(result)
            }).catch((err) => {
                logMessenger.createLogError(`Requisição retornou um erro: ${JSON.stringify(err)}`)
                return res.json({ statusCode: 400, message: err.sqlMessage })
            })
        } catch (e) {
            logMessenger.createLogWarning(`Ocorreu um erro na requisição!`)
            next(e)
        }
    }

    create(req, res, next) {
        try {
            logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
            this.service.create(req.body).then(function () {
                logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno: Registro inserido com sucesso!`)
                return res.json({ message: "Registro incluído com sucesso" })
            }).catch(function (err) {
                logMessenger.createLogError(`Requisição retornou um erro: ${JSON.stringify(err)}`)
                return res.json({ statusCode: 400, message: err.sqlMessage })
            })
        } catch (e) {
            logMessenger.createLogWarning(`Ocorreu um erro na requisição!`)
            next(e)
        }
    }

    update(req, res, next) {
        try {
            logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
            this.service.update(req.body).then(function () {
                logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno: Registro atualizado com sucesso!`)
                return res.json({ message: "Registro atualizado com sucesso" })
            }).catch(function (err) {
                logMessenger.createLogError(`Requisição retornou um erro: ${JSON.stringify(err)}`)
                return res.json({ statusCode: 400, message: err.sqlMessage })
            })
        } catch (e) {
            logMessenger.createLogWarning(`Ocorreu um erro na requisição!`)
            next(e)
        }
    }

    delete(req, res, next) {
        try {
            logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
            this.service.delete(req.params.id).then(function () {
                logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno: Registro removido com sucesso!`)
                return res.json({ message: "Registro removido com sucesso" })
            }).catch(function (err) {
                logMessenger.createLogError(`Requisição retornou um erro: ${JSON.stringify(err)}`)
                return res.json({ statusCode: 400, message: err.sqlMessage })
            })
        } catch (e) {
            logMessenger.createLogWarning(`Ocorreu um erro na requisição!`)
            next(e)
        }
    }
}

module.exports = BaseController