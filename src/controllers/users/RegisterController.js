const handleError = require("../../errors/handlerError");
const { CreateUserService } = require("../../services/users/index");

class RegisterController {
  async createUser(request, response) {
    try {
      const { name, email, password, cep, uf, city } = request.body;

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
      handleError(response, error, 400);
    }
  }
}

module.exports = { RegisterController };
