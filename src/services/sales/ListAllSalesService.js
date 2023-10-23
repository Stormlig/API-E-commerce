const {
  SalesRepository,
} = require("../../database/Repositories/SalesRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

class ListAllSalesService {
  constructor() {
    this.salesRepository = new SalesRepository();
    this.userRepository = new UserRepository();
  }
  async execute(userId) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const result = await this.salesRepository.findAll();

    return result;
  }
}

module.exports = { ListAllSalesService };
