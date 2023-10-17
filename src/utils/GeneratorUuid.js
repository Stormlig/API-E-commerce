const { v4: uuidv4 } = require("uuid");

class UUIDGenerator {
  generateUUID() {
    return uuidv4();
  }
}

module.exports = { UUIDGenerator };
