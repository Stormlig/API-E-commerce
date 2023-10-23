const express = require("express");

const {
  ListAllProductsController,
  RegisterProductsController,
  UpdateProductsController,
  DeleteProductsController,
} = require("../../controllers/products/index");

const listAllProductsController = new ListAllProductsController();
const registerProductsController = new RegisterProductsController();
const updateProductsController = new UpdateProductsController();
const deleteProductsController = new DeleteProductsController();

const routerProducts = express.Router();

routerProducts.get("/listar", (request, response) => {
  listAllProductsController.ListAll(request, response);
});

routerProducts.post("/registrar", (request, response) => {
  registerProductsController.Register(request, response);
});

routerProducts.put("/atualizarProduto", (request, response) => {
  updateProductsController.Update(request, response);
});

routerProducts.delete("/excluirProduto/:id", (request, response) => {
  deleteProductsController.delete(request, response);
});

module.exports = { routerProducts };
