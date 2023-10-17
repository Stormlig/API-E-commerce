class FieldsValidator {
  validateFields(request, response, next) {
    const data = request.body;

    const findEmptyField = (data) => {
      return Object.keys(data).find((field) => data[field] === "") || null;
    };

    const emptyField = findEmptyField(data);

    if (emptyField !== null) {
      return response.status(409).json({
        mensagem: `Campo vazio encontrado: ${emptyField}. Por favor preencha todos os campos!`,
      });
    }

    next();
  }
}

module.exports = { FieldsValidator };
