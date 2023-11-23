const express = require("express");

const {
  ListAllProductsController,
  RegisterProductsController,
  UpdateProductsController,
  DeleteProductsController,
} = require("../../controllers/products/index");

const {
  AuthJsonWebTokenMiddleware,
  multer,
} = require("../../middlewares/index.js");

const listAllProductsController = new ListAllProductsController();
const registerProductsController = new RegisterProductsController();
const updateProductsController = new UpdateProductsController();
const deleteProductsController = new DeleteProductsController();

const authMiddleware = new AuthJsonWebTokenMiddleware();

const routerProducts = express.Router();

routerProducts.get("/listar", (request, response) => {
  listAllProductsController.ListAll(request, response);
});

routerProducts.post(
  "/registrar",
  multer.single("image"),
  authMiddleware.AuthJsonWebToken,

  (request, response) => {
    registerProductsController.Register(request, response);
  },
);

routerProducts.put(
  "/atualizarProduto",
  multer.single("image"),
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    updateProductsController.Update(request, response);
  },
);

routerProducts.delete(
  "/excluirProduto/:id",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    deleteProductsController.delete(request, response);
  },
);

module.exports = { routerProducts };
