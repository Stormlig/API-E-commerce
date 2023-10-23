const {
  CartShoppingRepository,
} = require("../../database/Repositories/CartShoppingRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

const {
  ProductsRepository,
} = require("../../database/Repositories/ProductsRepository/index");

const { CartItem } = require("../../entities/carts/Carts");

class AddItemCartService {
  constructor() {
    this.cartShoppingRepository = new CartShoppingRepository();
    this.userRepository = new UserRepository();
    this.productsRepository = new ProductsRepository();
  }
  async execute(userId, productId, name, price, quantity) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const existingProduct = await this.productsRepository.findById(productId);

    if (!existingProduct) {
      throw new Error("Produto não encontrado");
    }

    if (quantity <= 0) {
      throw new Error("A quantidade deve ser um número positivo");
    }

    const existingCartItem =
      await this.cartShoppingRepository.findCartItemByProductId(
        userId,
        productId,
      );

    if (existingCartItem.length > 0) {
      const updatedQuantity = existingCartItem[0].quantity + quantity;

      const product_id = existingCartItem[0].product_id;

      const updatedItem = await this.cartShoppingRepository.updateQuantity(
        userId,
        product_id,
        updatedQuantity,
      );

      return updatedItem;
    }

    const newItem = new CartItem(userId, name, productId, price, quantity);

    const createdItem = await this.cartShoppingRepository.addItem(newItem);

    return createdItem;
  }
}

module.exports = { AddItemCartService };
