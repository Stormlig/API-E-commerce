const { Dayjs } = require("../../utils/Dayjs");
const { UUIDGenerator } = require("../../utils/GeneratorUuid");
const { v4: uuidv4 } = require("uuid");

class User {
  constructor(id, name, email, password, date, cep, uf, city) {
    this.id = id || uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
    this.date = date || new Date();
    this.cep = cep;
    this.uf = uf;
    this.city = city;
  }
}

module.exports = { User };
