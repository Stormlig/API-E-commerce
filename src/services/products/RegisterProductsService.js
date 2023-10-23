const { Products } = require("../../entities/products/products");
const { Stocks } = require("../../entities/stock/Stocks");
const {
  ProductsRepository,
} = require("../../database/Repositories/ProductsRepository/index");
const {
  StockRepository,
} = require("../../database/Repositories/StockRepository/index");
const {
  CategoriesRepository,
} = require("../../database/Repositories/CategoriesRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

class RegisterProductsService {
  constructor() {
    this.productsRepository = new ProductsRepository();
    this.stockRepository = new StockRepository();
    this.categoriesRepository = new CategoriesRepository();
    this.userRepository = new UserRepository();
  }

  async execute({
    userId,
    name,
    description,
    categories_id,
    mark,
    price,
    quantity,
  }) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }
    const existingCategory =
      await this.categoriesRepository.findById(categories_id);

    if (!existingCategory) {
      const findAllCategories = await this.categoriesRepository.findAll();

      throw new Error(
        `Categoria não cadastrada. Por favor, escolha uma
        categoria válida entre as seguintes opções: ${findAllCategories}`,
      );
    }

    const product = new Products(
      null,
      name,
      description,
      categories_id,
      mark,
      price,
    );

    const productRegisted = await this.productsRepository.register(product);

    const { id } = productRegisted[0];
    const productBox = new Stocks(
      existingCategory.id,
      id,
      quantity,
      existingCategory.name,
    );

    await this.stockRepository.register(productBox);

    return productRegisted;
  }
}

module.exports = { RegisterProductsService };
