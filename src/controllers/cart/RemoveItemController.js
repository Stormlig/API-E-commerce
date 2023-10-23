const handleError = require("../../errors/handlerError");
const { RemoveItemCartService } = require("../../services/cart/index");

class RemoveItemController {
  constructor() {
    this.removeItemCartService = new RemoveItemCartService();
  }
  async RemoveItemCart(request, response) {
    const { userId } = response.locals.usuario;
    const { id } = request.params;

    try {
      await this.removeItemCartService.execute(userId, id);

      return response.status(200).json();
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}

module.exports = { RemoveItemController };
