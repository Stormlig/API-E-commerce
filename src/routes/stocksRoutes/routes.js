const express = require("express");

const {
  DeleteStocksController,
  ListAllStocksController,
  UpdateStocksController,
} = require("../../controllers/stocks/index");

const { AuthJsonWebTokenMiddleware } = require("../../middlewares/index.js");

const deleteStocksController = new DeleteStocksController();
const listAllStocksController = new ListAllStocksController();
const updateStocksController = new UpdateStocksController();

const authMiddleware = new AuthJsonWebTokenMiddleware();

const routeStocks = express.Router();

routeStocks.get(
  "/listarEstoque",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    listAllStocksController.ListAllStocks(request, response);
  },
);

routeStocks.put(
  "/atualizarEstoque",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    updateStocksController.UpdateStocks(request, response);
  },
);

routeStocks.delete(
  "/deletarEstoque/:id",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    deleteStocksController.DeleteStocks(request, response);
  },
);

module.exports = { routeStocks };
