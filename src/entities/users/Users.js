const { Dayjs } = require("../../utils/Dayjs");
const { UUIDGenerator } = require("../../utils/GeneratorUuid");

class User {
  constructor(id, name, email, password, date, cep, uf, city) {
    this.id = id || new UUIDGenerator().generateUUID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.date = date || new Dayjs().Date();
    this.cep = cep;
    this.uf = uf;
    this.city = city;
  }
}

module.exports = { User };
