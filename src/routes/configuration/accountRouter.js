const express = require('express')

const accountRouter = express.Router()

/**
 * @openapi
 * /api/account/login:
 *   post:
 *     summary: Login de usuário.
 *     description: Obtém o token do usuário através do login e senha.
 *     tags: [Users]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Objeto do usuário
 *         schema:
 *           $ref: '#/components/schemas/loginSchema'
 *     responses:
 *       200:
 *         description: Success.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/tokenSchema'
 *       400:
 *         description: Bad Request.
 */
accountRouter.post('/login', function(req, res, next) {
    return userController.login(req, res, next)
})

module.exports = accountRouter