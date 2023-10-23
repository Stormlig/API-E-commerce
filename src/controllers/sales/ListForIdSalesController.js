const handleError = require("../../errors/handlerError");

const {
  ListForIdSalesService,
} = require("../../services/sales/ListForIdSalesService");

class ListForIdSalesController {
  constructor() {
    this.listForIdSalesService = new ListForIdSalesService();
  }
  async ListForId(request, response) {
    const { userId } = response.locals.usuario;
    const { id } = request.params;

    try {
      const result = await this.listForIdSalesService.execute(id, userId);

      return response.status(200).json(result);
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}

module.exports = {
  ListForIdSalesController,
};
