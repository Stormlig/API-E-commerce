const { UUIDGenerator } = require("../../utils/GeneratorUuid");

class Products {
  constructor(id, name, description, category, mark, price, image) {
    this.id = id || new UUIDGenerator().generateUUID();
    this.name = name;
    this.description = description;
    this.categories_id = category;
    this.mark = mark;
    this.price = price;
    this.image = image || null;
  }
}

module.exports = { Products };
