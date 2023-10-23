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

    const { id, name, description, categories_id, mark, price } = request.body;
    // adicionar uma verificação requisição  que valida se  usuario tem permissão para editar os produtos.
    try {
      const product = await this.updateProductsService.execute({
        userId,
        id,
        name,
        description,
        categories_id,
        mark,
        price,
      });

      return response.status(201).json(product);
    } catch (error) {
      console.error(error);
      handleError(response, error, 400);
    }
  }
}

module.exports = { UpdateProductsController };
