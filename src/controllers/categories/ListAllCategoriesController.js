const handleError = require("../../errors/handlerError");

const { ListAllCategoriesService } = require("../../services/categories/index");

class ListAllCategoriesController {
  constructor() {
    this.listAllCetegoriesService = new ListAllCategoriesService();
  }

  async ListAllCategories(request, response) {
    const { userId } = response.locals.usuario;

    try {
      const categories = await this.listAllCetegoriesService.execute(userId);

      return response.status(200).json(categories);
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}
module.exports = { ListAllCategoriesController };
