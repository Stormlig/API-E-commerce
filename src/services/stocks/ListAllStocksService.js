const {
  StockRepository,
} = require("../../database/Repositories/StockRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

class ListAllStocksService {
  constructor() {
    this.stockRepository = new StockRepository();
    this.userRepository = new UserRepository();
  }

  async execute(userId) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const stocks = await this.stockRepository.findAll();

    return stocks;
  }
}

module.exports = { ListAllStocksService };
