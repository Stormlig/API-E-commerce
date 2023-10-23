const express = require("express");

const {
  ListAllCategoriesController,
  RegisterCategoriesController,
} = require("../../controllers/categories/index");

const { AuthJsonWebTokenMiddleware } = require("../../middlewares/index.js");

const listAllCategoriesController = new ListAllCategoriesController();
const registerCategoriesController = new RegisterCategoriesController();

const authMiddleware = new AuthJsonWebTokenMiddleware();

const routeCategories = express.Router();

routeCategories.get(
  "/listarCategorias",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    listAllCategoriesController.ListAllCategories(request, response);
  },
);

routeCategories.post(
  "/cadastrarCategorias",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    registerCategoriesController.RegisterCategories(request, response);
  },
);

module.exports = { routeCategories };
