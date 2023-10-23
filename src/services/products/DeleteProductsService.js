const {
  ProductsRepository,
} = require("../../database/Repositories/ProductsRepository/index");

class DeleteProductsService {
  constructor() {
    this.productsRepository = new ProductsRepository();
  }
  async execute(id) {
    const result = await this.productsRepository.delete(id);

    if (!result) {
      throw new Error("Produto não encontrado");
    }

    // adicionar logica para remover do estoque o produto que for deletado

    return result;
  }
}

module.exports = { DeleteProductsService };
