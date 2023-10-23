const express = require("express");

const {
  RegisterSalesController,
  ListAllSalesController,
  ListForIdSalesController,
} = require("../../controllers/sales/index");

const { AuthJsonWebTokenMiddleware } = require("../../middlewares/index.js");

const registerSalesController = new RegisterSalesController();
const listAllSalesController = new ListAllSalesController();
const listForIdSalesController = new ListForIdSalesController();

const authMiddleware = new AuthJsonWebTokenMiddleware();

const routeSales = express.Router();

routeSales.post(
  "/venda",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    registerSalesController.Sale(request, response);
  },
);

routeSales.get(
  "/vendas",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    listAllSalesController.ListAllSales(request, response);
  },
);

routeSales.get(
  "/vendas/:id",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    listForIdSalesController.ListForId(request, response);
  },
);

module.exports = { routeSales };
