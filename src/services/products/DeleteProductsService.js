const {
  ProductsRepository,
} = require("../../database/Repositories/ProductsRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

const {
  StockRepository,
} = require("../../database/Repositories/StockRepository");

class DeleteProductsService {
  constructor() {
    this.productsRepository = new ProductsRepository();
    this.userRepository = new UserRepository();
    this.stockRepository = new StockRepository();
  }
  async execute(id, userId) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const checkStock = await this.stockRepository.findById(id);

    if (!checkStock) {
      throw new Error("Estoque não encontrado");
    }
    await this.stockRepository.delete(id);

    const result = await this.productsRepository.delete(id);

    if (!result) {
      throw new Error("Produto não encontrado");
    }

    return result;
  }
}

module.exports = { DeleteProductsService };
