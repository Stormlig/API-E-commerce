const handleError = require("../../errors/handlerError");
const { CalculateTotalService } = require("../../services/cart/index");

class CalculateTotalController {
  constructor() {
    this.calculateTotalService = new CalculateTotalService();
  }
  async CalculateTotal(request, response) {
    const { userId } = response.locals.usuario;

    try {
      const total = await this.calculateTotalService.execute(userId);

      return response.json(total);
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}

module.exports = { CalculateTotalController };
