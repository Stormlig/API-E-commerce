const { UserController } = require("./users/UserController");
const { LoginController } = require("./users/LoginController");
const { UpdateController } = require("./users/UpdateController");
const { DeleteController } = require("./users/DeleteController");

module.exports = {
  UserController,
  LoginController,
  UpdateController,
  DeleteController,
};
