const {
  ProductsRepository,
} = require("../../database/Repositories/ProductsRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

class UpdateProductsService {
  constructor() {
    this.productsRepository = new ProductsRepository();
    this.userRepository = new UserRepository();
  }
  async execute({ userId, id, name, description, categories_id, mark, price }) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

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
