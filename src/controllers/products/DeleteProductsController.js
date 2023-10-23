const handleError = require("../../errors/handlerError");
const { DeleteProductsService } = require("../../services/products/index");

class DeleteProductsController {
  constructor() {
    this.deleteProductsService = new DeleteProductsService();
  }
  async delete(request, response) {
    const { userId } = response.locals.usuario;

    const { id } = request.params;
    //adicionar uma função para validar que todos os campos sejam obrigatório
    try {
      if (id === undefined) {
        throw new Error("Passe um id valido!");
      }

      await this.deleteProductsService.execute(id, userId);

      return response
        .status(200)
        .json({ message: "Produto deletado com sucesso!" });
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}

module.exports = { DeleteProductsController };
