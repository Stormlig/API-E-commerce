const handleError = require("../../errors/handlerError");
const { ListAllStocksService } = require("../../services/stocks/index");

class ListAllStocksController {
  constructor() {
    this.listAllStocksService = new ListAllStocksService();
  }

  async ListAllStocks(request, response) {
    const { userId } = response.locals.usuario;

    try {
      const stocks = await this.listAllStocksService.execute(userId);

      return response.status(200).json(stocks);
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}

module.exports = { ListAllStocksController };
