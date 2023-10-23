const {
  ProductsRepository,
} = require("../../database/Repositories/ProductsRepository/index");

class UpdateProductsService {
  constructor() {
    this.productsRepository = new ProductsRepository();
  }
  async execute({ id, name, description, categories_id, mark, price }) {
    const product = await this.productsRepository.update({
      id,
      name,
      description,
      categories_id,
      mark,
      price,
    });

    return product;
  }
}

module.exports = { UpdateProductsService };
