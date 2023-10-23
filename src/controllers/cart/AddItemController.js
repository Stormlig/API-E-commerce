const handleError = require("../../errors/handlerError");
const { AddItemCartService } = require("../../services/cart/index");

class AddItemController {
  constructor() {
    this.addItemCartService = new AddItemCartService();
  }
  async AddItemCart(request, response) {
    const { userId } = response.locals.usuario;
    const { product_id, name, price, quantity } = request.body;

    try {
      const result = await this.addItemCartService.execute(
        userId,
        product_id,
        name,
        price,
        quantity,
      );

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      handleError(response, error, 400);
    }
  }
}

module.exports = { AddItemController };
