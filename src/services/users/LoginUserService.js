const { ComparePasswordService } = require("../../auth/index");
const {
  UserRepository,
} = require("../../database/Repositories/UserRepository");

class LoginUserService {
  constructor() {
    this.userRepository = new UserRepository();
    this.comperePasswordService = new ComparePasswordService();
  }
  async LoginUser(email, password) {
    const newSession = await this.userRepository.findByEmail(email);

    if (newSession) {
      await this.comperePasswordService.compare(password, newSession.password);

      return newSession;
    } else {
      throw new Error("Email ou senha inválido.");
    }
  }
}

module.exports = { LoginUserService };
