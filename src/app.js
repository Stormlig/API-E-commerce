const express = require("express");
const { router } = require("./routes/userRoutes/routes");
const { FieldsValidator } = require("./middlewares/index");
const { routerProducts } = require("./routes/productsRoutes/routes");
const { routeSales } = require("./routes/salesRoutes/routes");
const { routeStocks } = require("./routes/stocksRoutes/routes");
const { routeCategories } = require("./routes/categoriesRoutes/routes");
const { routeCarts } = require("./routes/cartsRoutes/routes");

const app = express();
const fieldsValidator = new FieldsValidator();

app.use(express.json());
app.use(fieldsValidator.validateFields);
app.use(router);
app.use(routerProducts);
app.use(routeSales);
app.use(routeStocks);
app.use(routeCategories);
app.use(routeCarts);

module.exports = { app };
