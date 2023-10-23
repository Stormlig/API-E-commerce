const handleError = require("../../errors/handlerError");

const { ListAllSalesService } = require("../../services/sales/index");

class ListAllSalesController {
  constructor() {
    this.listAllSalesService = new ListAllSalesService();
  }

  async ListAllSales(request, response) {
    const { userId } = response.locals.usuario;
    try {
      const result = await this.listAllSalesService.execute(userId);

      return response.status(200).json(result);
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}

module.exports = {
  ListAllSalesController,
};
