const express = require("express");

const {
  AddItemController,
  ListAllItemController,
  RemoveItemController,
  UpdateQuantityController,
  CalculateTotalController,
} = require("../../controllers/cart/index");

const { AuthJsonWebTokenMiddleware } = require("../../middlewares/index.js");

const authMiddleware = new AuthJsonWebTokenMiddleware();
const addItemController = new AddItemController();
const listAllItemController = new ListAllItemController();
const removeItemController = new RemoveItemController();
const updateQuantityController = new UpdateQuantityController();
const calculateTotalController = new CalculateTotalController();

const routeCarts = express.Router();

routeCarts.post(
  "/carrinho/addItem",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    addItemController.AddItemCart(request, response);
  },
);

routeCarts.get(
  "/carrinho/listar",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    listAllItemController.ListAllCart(request, response);
  },
);

routeCarts.delete(
  "/carrinho/removerItem/:id",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    removeItemController.RemoveItemCart(request, response);
  },
);

routeCarts.put(
  "/carrinho/atualizarQuantidade",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    updateQuantityController.UpdateQuantityCart(request, response);
  },
);

routeCarts.get(
  "/carrinho/total",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    calculateTotalController.CalculateTotal(request, response);
  },
);

module.exports = { routeCarts };
