const {
  SalesRepository,
} = require("../../database/Repositories/SalesRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

class ListForIdSalesService {
  constructor() {
    this.salesRepository = new SalesRepository();
    this.userRepository = new UserRepository();
  }

  async execute(id, userId) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const sales = await this.salesRepository.findById(id);

    if (!sales) {
      throw new Error("Registro da venda não encontrado.");
    }

    return sales;
  }
}

module.exports = {
  ListForIdSalesService,
};
