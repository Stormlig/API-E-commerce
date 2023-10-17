const express = require("express");

//imports
const {
  UserController,
  LoginController,
  UpdateController,
  DeleteController,
} = require("../controllers/index.js");

const { CreateUserService } = require("../services/index.js");

const {
  UserRepository,
} = require("../database/Repositories/UserRepository/index.js");

const { AuthJsonWebTokenMiddleware } = require("../middlewares/index.js");

//instances
const usersRepository = new UserRepository();
const createUserService = new CreateUserService(usersRepository);
const userController = new UserController();
const loginController = new LoginController();
const updateController = new UpdateController(usersRepository);
const deleteController = new DeleteController(usersRepository);

// Crie uma instância do middleware.
const authMiddleware = new AuthJsonWebTokenMiddleware();

const router = express.Router();

//routes
router.get("/");

router.post("/cadastrar", (request, response) => {
  userController.createUser(request, response, createUserService);
});

router.post("/logar", (request, response) => {
  loginController.Login(request, response);
});

router.put(
  "/Atualizar",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    updateController.Update(request, response);
  },
);

router.delete(
  "/excluir",
  authMiddleware.AuthJsonWebToken,
  (request, response) => {
    deleteController.Delete(request, response);
  },
);

module.exports = { router };
