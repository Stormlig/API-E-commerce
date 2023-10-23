const { UUIDGenerator } = require("../../utils/GeneratorUuid");
const { Dayjs } = require("../../utils/Dayjs");

class Sales {
  constructor(
    id,
    product_id,
    quantity,
    date_sale,
    value_unit_product,
    amount,
    form_of_payment,
    purchaser_id,
    transaction_id,
    name,
    email,
  ) {
    this.id = id || new UUIDGenerator().generateUUID();
    this.product_id = product_id;
    this.quantity = quantity;
    this.date_sale = date_sale || new Dayjs().Date();
    this.value_unit_product = value_unit_product;
    this.amount = amount;
    this.form_of_payment = form_of_payment;
    this.purchaser_id = purchaser_id;
    this.transaction_id = transaction_id;
    this.name = name;
    this.email = email;
  }
}

module.exports = { Sales };
