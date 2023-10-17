const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");
const { ComparePasswordService } = require("../../auth/index");

class DeleteUserService {
  constructor() {
    this.userRepository = new UserRepository();
    this.comperePasswordService = new ComparePasswordService();
  }
  async execute(userId, email, password) {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const validPassword = await this.comperePasswordService.compare(
      password,
      user.password,
    );

    if (!validPassword) {
      throw new Error("Senha Inválida");
    }

    if (user.email !== email) {
      throw new Error("Email Inválido");
    }

    const deletedUser = await this.userRepository.delete(userId);

    return deletedUser;
  }
}

module.exports = { DeleteUserService };
