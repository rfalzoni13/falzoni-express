const AccountService = require('../../services/configuration/accountService')
const logMessenger = require('../../utils/logMessenger')

class AccountController {
    constructor() {
        super()
        this.service = new AccountService()
    }

    login(req, res, next) {
        logMessenger.createLogInfo(`Obtendo requisição - endereço: ${req.originalUrl}`)
        this.service.login(req.body).then(function (result) {
            logMessenger.createLogSuccess(`Requisição efetuada com sucesso - retorno: ${JSON.stringify(result)}`)
            return res.json(result)
        }).catch(function (err) {
            logMessenger.createLogError(`Requisição retornou um erro: ${JSON.stringify(err)}`)
            next(err)
        })
    }
}

module.exports = AccountController