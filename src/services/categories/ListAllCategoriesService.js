const {
  CategoriesRepository,
} = require("../../database/Repositories/CategoriesRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

class ListAllCategoriesService {
  constructor() {
    this.CategoriesRepository = new CategoriesRepository();
    this.userRepository = new UserRepository();
  }

  async execute(userId) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const result = await this.CategoriesRepository.findAll();

    return result;
  }
}

module.exports = { ListAllCategoriesService };
