const axios = require("axios");
require("dotenv").config();

const instanceAxios = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.SECRET_KEY_TOKEN_API}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

module.exports = instanceAxios;
