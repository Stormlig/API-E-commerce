const { LoginUserService } = require("../../services/users/index");
const { CreateJwtToken } = require("../../security/index");
const handleError = require("../../errors/handlerError");

class LoginController {
  constructor() {
    this.loginUserService = new LoginUserService();
    this.createJwtToken = new CreateJwtToken();
  }
  async Login(request, response) {
    try {
      const { email, password } = request.body;

      const user = await this.loginUserService.LoginUser(email, password);

      const token = this.createJwtToken.tokenJwt(user.id);

      const responseUser = {
        name: user.name,
        email: user.email,
        id: user.id,
        token: token,
      };

      return response.status(200).json(responseUser);
    } catch (error) {
      handleError(response, error, 404);
    }
  }
}

module.exports = { LoginController };
