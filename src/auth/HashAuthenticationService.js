const bcrypt = require("bcrypt");

class ComparePasswordService {
  //corrigir escrita
  async compare(plainPassword, hashedPasssword) {
    const passwordMatch = await bcrypt.compare(plainPassword, hashedPasssword);

    if (!passwordMatch) {
      throw new Error("Senha Inválida");
    }

    return passwordMatch;
  }
}

module.exports = { ComparePasswordService };
