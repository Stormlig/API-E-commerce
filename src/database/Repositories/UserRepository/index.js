const db = require("../../connection");

class UserRepository {
  async create(user) {
    const result = await db("users").insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      date: user.date,
      cep: user.cep,
      uf: user.uf,
      city: user.city,
    });

    return result;
  }

  async findById(userId) {
    const result = await db("users").where({ id: userId }).first();

    return result;
  }

  async update(user) {
    const result = await db("users").where({ id: user.userId }).update({
      email: user.email,
      password: user.password,
      cep: user.cep,
      uf: user.uf,
      city: user.city,
    });

    return result;
  }

  async findByEmail(email) {
    const result = await db("users").where({ email: email }).first();

    return result;
  }

  async delete(userId) {
    const result = await db("users").where({ id: userId }).delete();

    return result;
  }
}

module.exports = { UserRepository };
