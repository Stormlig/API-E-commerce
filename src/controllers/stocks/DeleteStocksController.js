const handleError = require("../../errors/handlerError");

const { DeleteStockService } = require("../../services/stocks/index");

class DeleteStocksController {
  constructor() {
    this.deleteStocksService = new DeleteStockService();
  }

  async DeleteStocks(request, response) {
    const { userId } = response.locals.usuario;
    const { id } = request.params;

    try {
      const stocks = await this.deleteStocksService.execute(userId, id);

      return response.status(200).json(stocks);
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}

module.exports = { DeleteStocksController };
