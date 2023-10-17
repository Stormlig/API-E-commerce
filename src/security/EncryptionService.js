const bcrypt = require("bcrypt");

class EncryptionService {
  async Encrypt(password) {
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt);

    return hash;
  }
}

module.exports = { EncryptionService };
