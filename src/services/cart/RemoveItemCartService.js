const {
  CartShoppingRepository,
} = require("../../database/Repositories/CartShoppingRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

class RemoveItemCartService {
  constructor() {
    this.cartShoppingRepository = new CartShoppingRepository();
    this.userRepository = new UserRepository();
  }
  async execute(userId, product_id) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const existingCartItem =
      await this.cartShoppingRepository.findCartItemByProductId(
        userId,
        product_id,
      );

    if (existingCartItem.length === 0) {
      throw new Error("O carrinho está vazio");
    }

    if (!existingCartItem) {
      throw new Error("Produto não encontrado");
    }

    const removedItem = await this.cartShoppingRepository.removeItem(
      existingCartItem[0].id,
      userId,
      product_id,
    );

    return removedItem;
  }
}

module.exports = { RemoveItemCartService };
