const db = require("../../connection");

class CartShoppingRepository {
  async addItem(item) {
    const result = await db("cart_shopping")
      .insert({
        user_id: item.user_id,
        name: item.name,
        product_id: item.product_id,
        price: item.price,
        quantity: item.quantity,
      })
      .returning("*");

    return result;
  }

  async findAll(userId) {
    const result = await db("cart_shopping")
      .where({ user_id: userId })
      .select("*");

    return result;
  }

  async findCartItemByProductId(userId, productId) {
    const result = await db("cart_shopping")
      .where({ user_id: userId, product_id: productId })
      .select("*");

    return result;
  }

  async removeItem(id, userId, product_id) {
    const result = await db("cart_shopping")
      .where({ id, user_id: userId, product_id })
      .delete();

    return result;
  }

  async updateQuantity(userId, product_id, quantity) {
    const result = await db("cart_shopping")
      .where({ user_id: userId, product_id })
      .update({
        quantity: quantity,
      })
      .returning("*");

    return result;
  }
}

module.exports = { CartShoppingRepository };
