const {
  ProductsRepository,
} = require("../../database/Repositories/ProductsRepository/index");

class ListAllProductsService {
  constructor() {
    this.productsRepository = new ProductsRepository();
  }
  async execute() {
    const products = await this.productsRepository.findAll();

    return products;
  }
}

module.exports = { ListAllProductsService };
