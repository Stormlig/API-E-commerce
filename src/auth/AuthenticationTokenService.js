const { CreateJwtToken } = require("../security/CreateJwtToken");

class AuthenticationTokenService {
  generateToken(result) {
    const { userId } = result;

    if (userId !== null) {
      const token = CreateJwtToken.tokenJwt(userId);
      return token;
    } else {
      throw new Error("Falha na Autenticação");
    }
  }
}

module.exports = { AuthenticationTokenService };
