const express = require('express')
const userRouter = express.Router()
var UserController = require('../../controllers/configuration/userController')
const middlewares = require('../../middlewares')
const userController = new UserController()

/**
 * @openapi
 * /api/users/getAll:
 *   get:
 *     summary: Listar usuários.
 *     description: Obtém todos os usuários registrados.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Success.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/userSchema'
 *       400:
 *         description: Bad Request.
 */
userRouter.get("/getAll", function(req, res, next) {
    return userController.getAll(req, res, next)
})

/**
 * @openapi
 * /api/users/get/{id}:
 *   get:
 *     summary: Listar usuário por id.
 *     description: Obtém usuário pesquisando por id.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Id do usuário
 *         schema:
 *           type: string
 *         
 *     responses:
 *       200:
 *         description: Success.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/userSchema'
 *       400:
 *         description: Bad Request.
 */
userRouter.get("/get/:id", middlewares.verifyJWT, function(req, res, next) {
    return userController.get(req, res, next)
})

/**
 * @openapi
 * /api/users/create:
 *   post:
 *     summary: Criar usuário.
 *     description: Cria um novo registro de usuário.
 *     tags: [Users]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Objeto do usuário
 *         schema:
 *           $ref: '#/components/schemas/userSchema'
 *     responses:
 *       201:
 *         description: Created.
 *       400:
 *         description: Bad Request.
 */
userRouter.post("/create", middlewares.verifyJWT, function(req, res, next) {
    return userController.create(req, res, next)
})

/**
 * @openapi
 * /api/users/update:
 *   put:
 *     summary: Atualizar usuário.
 *     description: Atualiza o registro de usuário.
 *     tags: [Users]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Objeto do usuário
 *         schema:
 *           $ref: '#/components/schemas/userSchema'
 *     responses:
 *       200:
 *         description: Success.
 *       400:
 *         description: Bad Request.
 */
userRouter.put("/update", middlewares.verifyJWT, function(req, res, next) {
    return userController.update(req, res, next)
})

/**
 * @openapi
 * /api/users/delete/{id}:
 *   delete:
 *     summary: Remover usuário.
 *     description: Remove registro de usuário através do id.
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: Id do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success.
 *       400:
 *         description: Bad Request.
 */
userRouter.delete("/delete/:id", middlewares.verifyJWT, function(req, res, next) {
    return userController.delete(req, res, next)
})

module.exports = userRouter