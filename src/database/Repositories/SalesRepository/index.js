const db = require("../../connection");

class SalesRepository {
  async register(sale) {
    const result = await db("sales")
      .insert({
        id: sale.id,
        product_id: sale.product_id,
        quantity: sale.quantity,
        date_sale: sale.date_sale,
        value_unit_product: sale.value_unit_product,
        amount: sale.amount,
        form_of_payment: sale.form_of_payment,
        purchaser_id: sale.purchaser_id,
        transaction_id: sale.transaction_id,
        name: sale.name,
        email: sale.email,
      })
      .returning("*");
    return result;
  }
  async findAll() {
    const result = await db("sales").select("*");

    return result;
  }
  async findById(saleId) {
    const result = await db("sales").where({ id: saleId }).first();

    return result;
  }
}

module.exports = { SalesRepository };
