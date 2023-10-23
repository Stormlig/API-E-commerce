/*

            Está função foi criada para que continuasse
                sendo possivel, deixar o mais realista possivel
                    para o usuario testar o sistema de pagamento.

*/
function obterTokenDoCartao(numeroCartao) {
  const cartaoParaToken = {
    4242424242424242: "tok_visa",
    4000056655665556: "tok_visa_debit",
    5555555555554444: "tok_mastercard",
    2223003122003222: "tok_mastercard",
    5200828282828210: "tok_mastercard_debit",
    5105105105105100: "tok_mastercard_prepaid",
    378282246310005: "tok_amex",
    371449635398431: "tok_amex",
    6011111111111117: "tok_discover",
    6011000990139424: "tok_discover",
    6011981111111113: "tok_discover",
    3056930009020004: "tok_diners",
    36227206271667: "tok_diners",
    6555900000604105: "tok_bc_card",
    3566002020360505: "tok_jcb",
    6200000000000005: "tok_unionpay",
    6200000000000047: "tok_unionpay",
    6205500000000000004: "tok_unionpay",
    4000000000000002: "tok_generic_decline",
    4000000000009995: "tok_insufficient_funds",
    4000000000009987: "tok_lost_card",
    4000000000009979: "tok_stolen_card",
    4000000000000069: "tok_expired_card",
    4000000000000127: "tok_incorrect_cvc",
    4000000000000119: "tok_processing_error",
    4242424242424241: "tok_incorrect_number",
    4000000000006975: "tok_card_velocity_exceeded",
  };

  return cartaoParaToken[numeroCartao] || null;
}

module.exports = obterTokenDoCartao;
