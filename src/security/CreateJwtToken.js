require("dotenv").config();
const jwt = require("jsonwebtoken");

class CreateJwtToken {
  tokenJwt(userId) {
    const payload = { userId };

    const token = jwt.sign(payload, process.env.SECRET_KEY_TOKEN, {
      expiresIn: "1h",
    });

    return token;
  }
}

module.exports = { CreateJwtToken };
