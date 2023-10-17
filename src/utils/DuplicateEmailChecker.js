const { UserRepository } = require("../database/Repositories/UserRepository");

class DuplicateEmailChecker {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async execute(email) {
    const duplicateEmail = await this.userRepository.findByEmail(email);

    if (duplicateEmail) {
      throw new Error("O email já está sendo utilizado.");
    }
  }
}

module.exports = { DuplicateEmailChecker };
