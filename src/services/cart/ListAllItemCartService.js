const {
  CartShoppingRepository,
} = require("../../database/Repositories/CartShoppingRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

class ListAllItemCartService {
  constructor() {
    this.cartShoppingRepository = new CartShoppingRepository();
    this.userRepository = new UserRepository();
  }
  async execute(userId) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const items = await this.cartShoppingRepository.findAll(userId);

    return items;
  }
}

module.exports = { ListAllItemCartService };
