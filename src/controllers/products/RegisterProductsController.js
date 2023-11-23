const handlerError = require("../../errors/handlerError");
const {
  RegisterProductsService,
} = require("../../services/products/RegisterProductsService");

class RegisterProductsController {
  constructor() {
    this.registerProductsService = new RegisterProductsService();
  }
  async Register(request, response) {
    const { userId } = response.locals.usuario;

    const image = request.file;

    const { name, description, categories_id, mark, price, quantity } =
      request.body;
    try {
      const result = await this.registerProductsService.execute({
        userId,
        name,
        description,
        categories_id,
        mark,
        price,
        quantity,
        image,
      });

      return response.status(201).json(result);
    } catch (error) {
      console.error(error);
      handlerError(response, error, 400);
    }
  }
}

module.exports = { RegisterProductsController };
