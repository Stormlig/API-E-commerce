const handleError = require("../../errors/handlerError");
const { UpdateStocksService } = require("../../services/stocks/index");

class UpdateStocksController {
  constructor() {
    this.updateStocksService = new UpdateStocksService();
  }
  async UpdateStocks(request, response) {
    const { userId } = response.locals.usuario;
    const { productId, quantity } = request.body;

    try {
      const stockUpdated = await this.updateStocksService.execute(
        userId,
        productId,
        quantity,
      );

      return response.status(200).json(stockUpdated);
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}

module.exports = { UpdateStocksController };
