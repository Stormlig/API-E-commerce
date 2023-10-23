const handleError = require("../../errors/handlerError");

const {
  RegisterCategoriesService,
} = require("../../services/categories/index");

class RegisterCategoriesController {
  constructor() {
    this.registerCategoriesService = new RegisterCategoriesService();
  }
  async RegisterCategories(request, response) {
    const { userId } = response.locals.usuario;
    const { name, description } = request.body;

    try {
      const result = await this.registerCategoriesService.execute(
        userId,
        name,
        description,
      );

      return response.status(200).json(result);
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}

module.exports = { RegisterCategoriesController };
