const { DeleteProductsService } = require("./DeleteProductsService");
const { ListAllProductsService } = require("./ListAllProductsService");
const { RegisterProductsService } = require("./RegisterProductsService");
const { UpdateProductsService } = require("./UpdateProductsService");

module.exports = {
  ListAllProductsService,
  RegisterProductsService,
  UpdateProductsService,
  DeleteProductsService,
};
