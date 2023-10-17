const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
  },
});

db.raw("SELECT 1").then(() => {
  console.log("Conectado com o banco de dados.");
});

module.exports = db;
