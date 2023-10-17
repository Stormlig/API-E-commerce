const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");
const { EncryptionService } = require("../../security/index.js");
const { DuplicateEmailChecker } = require("../../utils/DuplicateEmailChecker");

class UpdateUserService {
  constructor() {
    this.userRepository = new UserRepository();
    this.encryptionService = new EncryptionService();
    this.duplicateEmailChecker = new DuplicateEmailChecker();
  }
  async UpdateUser(userId, email, password, cep, uf, city) {
    const findUser = await this.userRepository.findById(userId);
    if (!findUser) {
      // tenho  quase certeza que não preciso dessa verificação
      throw new Error(
        "Usuario não encontrado, refaça o login e tente novamente.",
      );
    }

    if (findUser.email === email) {
      throw new Error("O Email já foi cadastrado.");
    }

    const passwordHash = await this.encryptionService.Encrypt(password);

    //eu deveria criar m entity só para atualizar o o usuario ?
    const updateUser = await this.userRepository.update({
      email,
      passwordHash,
      cep,
      uf,
      city,
      userId,
    });

    return updateUser;
  }
}

module.exports = { UpdateUserService };
