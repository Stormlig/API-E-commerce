function handleError(response, error, statusCode) {
  if (error instanceof Error) {
    response.status(statusCode).json({ message: error.message });
  } else {
    response.status(500).json({ message: "Erro interno" });
  }
}

module.exports = handleError;
