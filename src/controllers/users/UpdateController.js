const { UpdateUserService } = require("../../services/index");
const handleError = require("../../errors/handlerError");

class UpdateController {
  constructor() {
    this.updateUserService = new UpdateUserService();
  }
  async Update(request, response) {
    try {
      const { userId } = response.locals.usuario;
      const { email, password, cep, uf, city } = request.body;

      await this.updateUserService.UpdateUser(
        userId,
        email,
        password,
        cep,
        uf,
        city,
      );

      return response.status(204).json({});
    } catch (error) {
      handleError(response, error, 409);
    }
  }
}

module.exports = { UpdateController };
