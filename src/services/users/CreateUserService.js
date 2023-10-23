const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index.js");
const { User } = require("../../entities/users/Users.js");
const {
  DuplicateEmailChecker,
} = require("../../providers/DuplicateEmailChecker.js");
const { EncryptionService } = require("../../security/index.js");

class CreateUserService {
  constructor() {
    this.usersRepository = new UserRepository();
    this.duplicateEmailChecker = new DuplicateEmailChecker();
    this.encryptionService = new EncryptionService();
  }

  async execute({ name, email, password, cep, uf, city }) {
    await this.duplicateEmailChecker.execute(email);

    const passwordHash = await this.encryptionService.Encrypt(password);

    const user = new User(null, name, email, passwordHash, null, cep, uf, city);
    return this.usersRepository.create(user);
  }
}

module.exports = { CreateUserService };
