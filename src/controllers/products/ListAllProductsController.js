const handleError = require("../../errors/handlerError");

const { ListAllProductsService } = require("../../services/products/index");

class ListAllProductsController {
  constructor() {
    this.listAllProductsService = new ListAllProductsService();
  }
  async ListAll(request, response) {
    try {
      const products = await this.listAllProductsService.execute();

      return response.status(200).json(products);
    } catch (error) {
      console.error(error);
      handleError(response, error, 400);
    }
  }
}

module.exports = { ListAllProductsController };
