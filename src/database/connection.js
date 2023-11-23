const knex = require("knex");
require("dotenv").config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
PGDATABASE = decodeURIComponent(PGDATABASE);

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: { rejectUnauthorized: false },
  },
});

module.exports = db;


