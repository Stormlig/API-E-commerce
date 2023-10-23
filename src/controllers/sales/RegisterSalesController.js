const handleError = require("../../errors/handlerError");
const { RegisterSalesService } = require("../../services/sales/index");

class RegisterSalesController {
  constructor() {
    this.registerSalesService = new RegisterSalesService();
  }

  async Sale(request, response) {
    const { userId } = response.locals.usuario;
    const { product_id, quantity, form_of_payment, card } = request.body;

    try {
      const result = await this.registerSalesService.execute(
        {
          product_id,
          quantity,
          form_of_payment,
          card,
        },
        userId,
      );

      return response.status(201).json(result);
    } catch (error) {
      handleError(response, error, 400);
    }
  }
}

module.exports = { RegisterSalesController };
