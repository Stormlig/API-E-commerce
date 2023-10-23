const db = require("../../connection");

class CategoriesRepository {
  async register(category) {
    await db("categories").insert({
      name: category.name,
      description: category.description,
    });
  }

  async findAll() {
    const result = await db("categories").select("*");

    return result;
  }

  async findById(categoryId) {
    const result = await db("categories")
      .where({ id: categoryId })
      .first()
      .returning("*");

    return result;
  }

  async update(category) {
    const result = await db("categories")
      .where({ id: category.id })
      .update({
        name: category.name,
        description: category.description,
      })
      .returning("*");

    return result;
  }

  async delete(categoryId) {
    const result = await db("categories").where({ id: categoryId }).delete();

    return result;
  }
}

module.exports = { CategoriesRepository };
