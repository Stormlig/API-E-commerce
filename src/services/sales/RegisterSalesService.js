const {
  SalesRepository,
} = require("../../database/Repositories/SalesRepository/index");
const {
  UserRepository,
} = require("../../database/Repositories/UserRepository/index");
const {
  ProductsRepository,
} = require("../../database/Repositories/ProductsRepository/index");
const { debitarToken, criarToken } = require("../../payments/PaymentValidator");
const obterTokenDoCartao = require("../../payments/SimulatorCardReal");
const { Sales } = require("../../entities/sales/Sales");
const {
  StockRepository,
} = require("../../database/Repositories/StockRepository/index");

class RegisterSalesService {
  constructor() {
    this.salesRepository = new SalesRepository();
    this.userRepository = new UserRepository();
    this.productRepository = new ProductsRepository();
    this.stockRepository = new StockRepository();
  }

  async execute(dataSale, userId) {
    const { product_id, quantity, form_of_payment, card } = dataSale;

    // Verificar se o usuário está logado.
    const userAuthenticated = await this.userRepository.findById(userId);

    if (!userAuthenticated) {
      throw new Error("Usuário não autenticado");
    }

    const findProduct = await this.productRepository.findById(product_id);

    if (!findProduct) {
      throw new Error("Produto não encontrado");
    }

    const checkStock = await this.stockRepository.findById(product_id);

    if (Number(checkStock.quantity) <= 0) {
      throw new Error("Estoque insuficiente");
    }

    const amount = Number(quantity) * Number(findProduct.price);

    // Verificar a forma de pagamento e obter um token de cartão.
    // const { number: numberCard } = card;
    //const tokenCartao = obterTokenDoCartao(numberCard);
    console.log(card, "cartão");
    const tokenCartao = criarToken(card);
    console.log(tokenCartao);

    const result = await debitarToken(amount, tokenCartao);
    const { id: transaction_id } = result;

    const sale = new Sales(
      null,
      product_id,
      quantity,
      null,
      findProduct.price,
      amount,
      form_of_payment,
      userAuthenticated.id,
      transaction_id,
      userAuthenticated.name,
      userAuthenticated.email,
    );

    // Registrar a venda no banco de dados.
    const saleMade = await this.salesRepository.register(sale);

    await this.stockRepository.update({
      product_id,
      quantity: checkStock.quantity - quantity,
    });

    return saleMade;
  }
}

module.exports = { RegisterSalesService };
