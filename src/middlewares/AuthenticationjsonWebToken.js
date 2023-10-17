const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthJsonWebTokenMiddleware {
  AuthJsonWebToken(request, response, next) {
    const token = request.header("Authorization");

    if (!token) {
      return response
        .status(401)
        .json({ message: "Token de autenticação não fornecido" });
    }

    if (!token.startsWith("Bearer ")) {
      return response
        .status(401)
        .json({ message: "Formato de token inválido" });
    }

    const tokenJWT = token.substring(7);
    try {
      const decoded = jwt.verify(tokenJWT, process.env.SECRET_KEY_TOKEN);

      response.locals.usuario = decoded;

      next();
    } catch (error) {
      return response
        .status(401)
        .json({ message: "Token de autenticação inválido" });
    }
  }
}

module.exports = { AuthJsonWebTokenMiddleware };
