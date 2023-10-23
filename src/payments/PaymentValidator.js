const instanceAxios = require("./PaymentGateway");
const qs = require("qs");

/*
      Devido a uma atualização da Stripe deixou de ser possivel criar token a partir dos cartões de teste!
      Então a função abaixo deixour de funcionar no modo teste!
*/

const criarToken = async (card) => {
  // Só utilizar quando estiver em produção
  const dadosCartao = qs.stringify(card);

  const { data: tokenCartao } = await instanceAxios.post(
    "/tokens",
    dadosCartao,
  );

  return tokenCartao;
};

const debitarToken = async (amount, tokenCartao) => {
  const dadosCobranca = qs.stringify({
    amount,
    currency: "brl",
    source: tokenCartao,
  });

  const { data: cobranca } = await instanceAxios.post(
    "/charges",
    dadosCobranca,
  );

  return cobranca;
};

module.exports = {
  criarToken,
  debitarToken,
};
