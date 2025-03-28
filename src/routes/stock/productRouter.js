const express = require('express')
const productRouter = express.Router()
var ProductController = require('../../controllers/stock/productController')

const productController = new ProductController()

/**
 * @openapi
 * /api/products/getAll:
 *   get:
 *     summary: Listar produtos.
 *     description: Obtém todos os produtos registrados.
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Success.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/productSchema'
 *       400:
 *         description: Bad Request.
 */
productRouter.get("/getAll", function(req, res, next) {
    return productController.getAll(req, res, next)
})

/**
 * @openapi
 * /api/products/get/{id}:
 *   get:
 *     summary: Listar produto por id.
 *     description: Obtém produto pesquisando por id.
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: Id do produto
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/productSchema'
 *       400:
 *         description: Bad Request.
 */
productRouter.get("/get/:id", function(req, res, next) {
    return productController.get(req, res, next)
})

/**
 * @openapi
 * /api/products/create:
 *   post:
 *     summary: Criar produto.
 *     description: Cria um novo registro de produto.
 *     tags: [Products]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Objeto do produto
 *         schema:
 *            $ref: '#/components/schemas/productSchema'
 *     responses:
 *       201:
 *         description: Created.
 *       400:
 *         description: Bad Request.
 */
productRouter.post("/create", function(req, res, next) {
    return productController.create(req, res, next)
})

/**
 * @openapi
 * /api/products/update:
 *   put:
 *     summary: Atualizar produto.
 *     description: Atualiza o registro de produto.
 *     tags: [Products]
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Objeto do produto
 *         schema:
 *            $ref: '#/components/schemas/productSchema'
 *     responses:
 *       201:
 *         description: Created.
 *       400:
 *         description: Bad Request.
 */
productRouter.put("/update", function(req, res, next) {
    return productController.update(req, res, next)
})

/**
 * @openapi
 * /api/products/delete/{id}:
 *   delete:
 *     summary: Remover produto.
 *     description: Remove registro de produto através do id.
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: Id do produto
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success.
 *       400:
 *         description: Bad Request.
 */
productRouter.delete("/delete", function(req, res, next) {
    return productController.delete(req, res, next)
})

module.exports = productRouter