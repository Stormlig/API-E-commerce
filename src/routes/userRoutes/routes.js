const express = require("express");

//imports
const {
  RegisterController,
  LoginController,
  UpdateController,
  DeleteController,
} = require("../../controllers/users");

const { CreateUserService } = require("../../services/users/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index.js");

const { AuthJsonWebTokenMiddleware } = require("../../middlewares/index.js");

//instances
const usersRepository = new UserRepository();
const createUserService = new CreateUserService(usersRepository);
const userController = new RegisterController();
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
