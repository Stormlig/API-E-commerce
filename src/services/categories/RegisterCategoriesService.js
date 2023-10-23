const {
  CategoriesRepository,
} = require("../../database/Repositories/CategoriesRepository/index");

const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");

const { Categories } = require("../../entities/categories/Categories");

class RegisterCategoriesService {
  constructor() {
    this.CategoriesRepository = new CategoriesRepository();
    this.userRepository = new UserRepository();
  }
  async execute(userId, name, description) {
    const existingUser = await this.userRepository.findById(userId);

    if (!existingUser) {
      throw new Error("Usuário não encontrado");
    }

    const newCategories = new Categories(null, name, description);

    const createdCategory =
      await this.CategoriesRepository.create(newCategories);

    return createdCategory;
  }
}

module.exports = { RegisterCategoriesService };
