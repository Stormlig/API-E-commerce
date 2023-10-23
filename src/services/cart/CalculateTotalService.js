const {
  CartShoppingRepository,
} = require("../../database/Repositories/CartShoppingRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

class CalculateTotalService {
  constructor() {
    this.cartShoppingRepository = new CartShoppingRepository();
    this.userRepository = new UserRepository();
  }

  async execute(userId) {
    const existingUser = await this.userRepository.findById(userId);
    console.log("chegou aki");
    console.log(existingUser);
    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const cartItems = await this.cartShoppingRepository.findAll(userId);
    console.log(cartItems);
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }

    return total;
  }
}

module.exports = { CalculateTotalService };
