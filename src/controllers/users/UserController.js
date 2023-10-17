const handleError = require("../../errors/handlerError");
const { CreateUserService } = require("../../services/index.js");

class UserController {
  async createUser(request, response) {
    try {
      const { name, email, password, cep, uf, city } = request.body;
      //adicionar uma função para validar que todos os campos sejam obrigatório

      const createUser = new CreateUserService();
      await createUser.execute({
        name,
        email,
        password,
        cep,
        uf,
        city,
      });

      return response.status(201).json({});
    } catch (error) {
      console.error(error);
      handleError(response, error, 400);
    }
  }
}

module.exports = { UserController };
