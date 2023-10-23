const {
  CartShoppingRepository,
} = require("../../database/Repositories/CartShoppingRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

class UpdateQuantityItemCartService {
  constructor() {
    this.cartShoppingRepository = new CartShoppingRepository();
    this.userRepository = new UserRepository();
  }
  async execute(userId, productId, quantity) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const existingCartItem =
      await this.cartShoppingRepository.findCartItemByProductId(
        userId,
        productId,
      );

    if (!existingCartItem) {
      throw new Error("Produto não encontrado");
    }

    if (quantity === 0) {
      throw new Error("A quantidade deve ser diferente de zero!");
    }

    if (existingCartItem) {
      const currentQuantity = existingCartItem[0].quantity;

      // Atualiza a quantidade com base no valor de quantity
      const updatedQuantity = currentQuantity + quantity;

      if (updatedQuantity < 0) {
        throw new Error("A quantidade não pode ser menor que zero.");
      }

      const updatedItem = await this.cartShoppingRepository.updateQuantity(
        userId,
        productId,
        updatedQuantity,
      );

      return updatedItem;
    } else {
      throw new Error("Item não encontrado no carrinho.");
    }
  }
}

module.exports = { UpdateQuantityItemCartService };
