const db = require("../../connection");

class ProductsRepository {
  async register(product) {
    const result = await db("products")
      .insert({
        id: product.id,
        name: product.name,
        description: product.description,
        categories_id: product.categories_id,
        mark: product.mark,
        price: product.price,
      })
      .returning("*");

    return result;
  }

  async findAll() {
    const result = await db("products").select("*");

    return result;
  }

  async findById(productId) {
    const result = await db("products")
      .where({ id: productId })
      .first()
      .returning("*");

    return result;
  }

  async update(product) {
    const result = await db("products")
      .where({ id: product.id })
      .update({
        name: product.name,
        description: product.description,
        categories_id: product.categories_id,
        mark: product.mark,
        price: product.price,
      })
      .returning("*");

    return result;
  }

  async delete(productId) {
    const result = await db("products").where({ id: productId }).delete();

    return result;
  }
}

module.exports = { ProductsRepository };
