const db = require("../../connection");

class StockRepository {
  async register(productBox) {
    await db("stocks").insert({
      categories_id: productBox.categories_id,
      product_id: productBox.product_id,
      quantity: productBox.quantity,
      name_category: productBox.name_category,
    });
  }

  async findAll() {
    const result = await db("stocks").select("*");

    return result;
  }

  async findById(productId) {
    const result = await db("stocks")
      .where({ product_id: productId })
      .first()
      .returning("*");

    return result;
  }

  async update(productBox) {
    const result = await db("stocks")
      .where({ product_id: productBox.product_id })
      .update({
        quantity: productBox.quantity,
        name_category: productBox.name_category,
      })
      .returning("*");

    return result;
  }

  async delete(productId) {
    const result = await db("stocks").where({ product_id: productId }).delete();

    return result;
  }
}

module.exports = { StockRepository };
