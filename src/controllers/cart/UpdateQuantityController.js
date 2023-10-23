const handleError = require("../../errors/handlerError");
const { UpdateQuantityItemCartService } = require("../../services/cart/index");

class UpdateQuantityController {
  constructor() {
    this.updateQuantityItemCartService = new UpdateQuantityItemCartService();
  }
  async UpdateQuantityCart(request, response) {
    const { userId } = response.locals.usuario;
    const { quantity, product_id } = request.body;

    try {
      const result = await this.updateQuantityItemCartService.execute(
        userId,
        product_id,
        quantity,
      );

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      handleError(response, error, 400);
    }
  }
}

module.exports = { UpdateQuantityController };
