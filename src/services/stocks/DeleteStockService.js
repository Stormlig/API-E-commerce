const {
  StockRepository,
} = require("../../database/Repositories/StockRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

const {
  ProductsRepository,
} = require("../../database/Repositories/ProductsRepository");

class DeleteStockService {
  constructor() {
    this.stockRepository = new StockRepository();
    this.userRepository = new UserRepository();
    this.productsRepository = new ProductsRepository();
  }

  async execute(userId, productId) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const stock = await this.stockRepository.findById(productId);

    if (!stock) {
      throw new Error("Estoque não encontrado");
    }

    const product = await this.productsRepository.findById(productId);

    if (!product) {
      throw new Error("Produto não encontrado");
    }

    await this.productsRepository.delete(productId);

    await this.stockRepository.delete(productId);

    return stock;
  }
}

module.exports = { DeleteStockService };
