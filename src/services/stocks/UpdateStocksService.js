const {
  StockRepository,
} = require("../../database/Repositories/StockRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

const {
  ProductsRepository,
} = require("../../database/Repositories/ProductsRepository");

class UpdateStocksService {
  constructor() {
    this.stockRepository = new StockRepository();
    this.userRepository = new UserRepository();
    this.productsRepository = new ProductsRepository();
  }

  async execute(userId, productId, quantity) {
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

    const stockUpdated = await this.stockRepository.update({
      product_id: productId,
      quantity: quantity,
    });
    console.log(stockUpdated);
    return stockUpdated;
  }
}

module.exports = { UpdateStocksService };
