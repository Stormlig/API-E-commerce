const handleError = require("../../errors/handlerError");
const { DeleteUserService } = require("../../services/users/index");

class DeleteController {
  constructor() {
    this.deleteUserService = new DeleteUserService();
  }
  async Delete(request, response) {
    try {
      const { userId } = response.locals.usuario;
      const { email, password } = request.body;

      await this.deleteUserService.execute(userId, email, password);

      return response.status(200).json({
        message:
          "Que pena que você está nos deixando. Sua conta foi deletada com sucesso",
      });
    } catch (error) {
      handleError(response, error, 409);
    }
  }
}

module.exports = { DeleteController };
