const express = require('express')
const customerRouter = express.Router()
var CustomerController = require('../../controllers/entries/customerController')

const customerController = new CustomerController()

/**
 * @openapi
 * /api/customers/getAll:
 *   get:
 *     summary: Listar clientes.
 *     description: Obtém todos os clientes registrados.
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Success.
 *       400:
 *         description: Bad Request.
 */
customerRouter.get("/getAll", function(req, res, next) {
    return customerController.getAll(req, res, next)
})

/**
 * @openapi
 * /api/customers/get/{id}:
 *   get:
 *     summary: Listar cliente por id.
 *     description: Obtém cliente pesquisando por id.
 *     tags: [Customers]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: Id do cliente
 *         schema:
 *           type: string
 *         
 *     responses:
 *       200:
 *         description: Success.
 *       400:
 *         description: Bad Request.
 */
customerRouter.get("/get/:id", function(req, res, next) {
    return customerController.get(req, res, next)
})

/**
 * @openapi
 * /api/customers/create:
 *   post:
 *     summary: Criar cliente.
 *     description: Cria um novo registro de cliente.
 *     tags: [Customers]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Objeto do cliente
 *         schema:
 *            type: object
 *            required:
 *              - name
 *              - dateBirth
 *              - gender
 *              - email
 *              - phoneNumber
 *              - cellPhoneNumber
 *              - document
 *            properties:
 *              name:
 *                type: string
 *                example: Renato
 *              dateBirth:
 *                type: string
 *                example: 1990-03-13
 *              gender:
 *                type: string
 *                example: Masculino
 *              email:
 *                type: string
 *                example: renato.lopes.falzoni@email.com
 *              phoneNumber:
 *                type: string
 *                example: (11) 3541-2343
 *              cellPhoneNumber:
 *                type: string
 *                example: (11) 95329-4415
 *              document:
 *                type: string
 *                example: 453.849.654-22
 *     responses:
 *       201:
 *         description: Created.
 *       400:
 *         description: Bad Request.
 */
customerRouter.post("/create", function(req, res, next) {
    return customerController.create(req, res, next)
})

/**
 * @openapi
 * /api/customers/update:
 *   put:
 *     summary: Atualizar cliente.
 *     description: Atualiza o registro de cliente.
 *     tags: [Customers]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Objeto do cliente
 *         schema:
 *            type: object
 *            required:
 *              - name
 *              - dateBirth
 *              - gender
 *              - email
 *              - phoneNumber
 *              - cellPhoneNumber
 *              - document
 *            properties:
 *              name:
 *                type: string
 *                example: Renato
 *              dateBirth:
 *                type: string
 *                example: 1990-03-13
 *              gender:
 *                type: string
 *                example: Masculino
 *              email:
 *                type: string
 *                example: renato.lopes.falzoni@email.com
 *              phoneNumber:
 *                type: string
 *                example: (11) 3541-2343
 *              cellPhoneNumber:
 *                type: string
 *                example: (11) 95329-4415
 *              document:
 *                type: string
 *                example: 453.849.654-22
 *     responses:
 *       201:
 *         description: Created.
 *       400:
 *         description: Bad Request.
 */
customerRouter.put("/update", function(req, res, next) {
    return customerController.update(req, res, next)
})

/**
 * @openapi
 * /api/customers/delete/{id}:
 *   delete:
 *     summary: Remover cliente.
 *     description: Remove registro de cliente através do id.
 *     tags: [Customers]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: Id do cliente
 *         schema:
 *           type: string
 *         
 *     responses:
 *       200:
 *         description: Success.
 *       400:
 *         description: Bad Request.
 */
customerRouter.delete("/delete/:id", function(req, res, next) {
    return customerController.delete(req, res, next)
})

module.exports = customerRouter