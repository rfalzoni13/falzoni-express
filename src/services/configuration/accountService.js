class AccountService {
    async login(obj) {
        try {
            validateLogin(obj)

            const user = await this.repository.getByUserName(obj.userName)
            if(user == null) throw new Error("Usuário não encontrado")

            if(!passwordUtil.verifyPassword(obj.password, user.password))
                throw new Error("Senha inválida")
            
            const expiresIn = 300
            const token = jwt.sign({obj: user}, process.env.SECRET, { expiresIn: expiresIn })

            return {token: token, expiresIn: expiresIn}
        } catch(e) {
            throw new ApplicationError(e.message, 400)
        }
    }
}

//private METHODS
validateLogin = (user) => {
    if(user == null || user === undefined) 
        throw new Error("Informações de login inválidas")

    if(user.password == null || user.password == undefined) 
        throw new Error("Senha não informada")
}

module.exports = AccountService