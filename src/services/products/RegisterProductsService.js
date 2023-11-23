const { Products } = require("../../entities/products/Products");
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
const { uploadImage } = require("../../utils/Upload");
const { UUIDGenerator } = require("../../utils/GeneratorUuid");

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
    image,
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

    let image_url = null;
    let product_id = null;

    if (image) {
      product_id = new UUIDGenerator().generateUUID();

      image_url = await uploadImage(image, product_id);
    }

    const product = new Products(
      null || product_id,
      name,
      description,
      categories_id,
      mark,
      price,
      null || image_url.url,
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
