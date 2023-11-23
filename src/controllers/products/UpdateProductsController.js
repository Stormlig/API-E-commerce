const handleError = require("../../errors/handlerError");
const {
  UpdateProductsService,
} = require("../../services/products/UpdateProductsService");

class UpdateProductsController {
  constructor() {
    this.updateProductsService = new UpdateProductsService();
  }
  async Update(request, response) {
    const { userId } = response.locals.usuario;

    const image = request.file;

    const { id, name, description, categories_id, mark, price } = request.body;

    try {
      const product = await this.updateProductsService.execute({
        userId,
        id,
        name,
        description,
        categories_id,
        mark,
        price,
        image,
      });

      return response.status(201).json(product);
    } catch (error) {
      console.error(error);
      handleError(response, error, 400);
    }
  }
}

module.exports = { UpdateProductsController };
