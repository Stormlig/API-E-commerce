const express = require("express");
const { router } = require("./routes/routes");
const { FieldsValidator } = require("./middlewares/index");

const app = express();
const fieldsValidator = new FieldsValidator();

app.use(express.json());
app.use(fieldsValidator.validateFields);
app.use(router);

module.exports = { app };
