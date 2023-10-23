const handleError = require("../../errors/handlerError");
const { ListAllItemCartService } = require("../../services/cart/index");

class ListAllItemController {
  constructor() {
    this.listAllItemCartService = new ListAllItemCartService();
  }
  async ListAllCart(request, response) {
    const { userId } = response.locals.usuario;

    try {
      const result = await this.listAllItemCartService.execute(userId);

      return response.status(200).json(result);
    } catch (error) {
      console.log(error);
      handleError(response, error, 400);
    }
  }
}
module.exports = { ListAllItemController };
