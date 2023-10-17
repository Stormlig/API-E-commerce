API E-commerce
Sobre o Projeto
A API E-commerce é uma aplicação RESTful que suporta operações CRUD simples e gerenciamento de produtos, como roupas e bolsas. Além disso, a API é capaz de gerar códigos de barras exclusivos para cada item cadastrado e controlar o estoque, removendo itens vendidos.

Tecnologias Utilizadas
A API E-commerce foi desenvolvida utilizando as seguintes tecnologias:

Node.js
Express.js
PostgreSQL
Knex.js
JWT (JSON Web Tokens)
Bcrypt
UUID
Zod (para validação de dados)
Day.js (para manipulação de datas)
Estrutura e Arquitetura
O projeto segue os princípios da arquitetura limpa e leva em consideração os princípios do SOLID. O código foi organizado de acordo com os princípios de modularidade, reutilização e responsabilidade única.

Instalação
Certifique-se de ter o Node.js instalado no seu sistema.
Clone este repositório: git clone https://github.com/seu-usuario/API_Ecommerce.git
Instale as dependências: npm install
Executando o Projeto
Execute o projeto usando o seguinte comando:

bash
Copy code
npm run dev
O servidor será iniciado em http://localhost:8080.

Endpoints
A API fornece os seguintes endpoints:

Cadastrar Usuário
Método: POST
URL: http://localhost:8080/cadastrar
Cria um novo usuário com os seguintes dados no corpo da solicitação (JSON):
json
Copy code
{
   "name": "Nome Fictício",
   "email": "email@example.com",
   "password": "senha_secreta",
   "cep": "12345-678",
   "uf": "UF",
   "city": "Cidade Fictícia"
}
Login
Método: POST
URL: http://localhost:8080/logar
Realiza o login com as credenciais fornecidas no corpo da solicitação (JSON):
json
Copy code
{
   "email": "email3@example.com",
   "password": "senha_secreta"
}
Atualizar Usuário
Método: PUT
URL: http://localhost:8080/atualizar
Atualiza os detalhes do usuário autenticado. É necessário fornecer um token de autorização no cabeçalho (Bearer Token) e os novos detalhes no corpo da solicitação (JSON):
json
Copy code
{
   "email": "email14@example.com",
   "password": "senha_secreta",
   "cep": "876-54321",
   "uf": "FU",
   "city": "E verdade"
}
Excluir Usuário
Método: DELETE
URL: http://localhost:8080/excluir
Exclui o usuário autenticado. É necessário fornecer um token de autorização no cabeçalho (Bearer Token) e as credenciais do usuário no corpo da solicitação (JSON):
json
Copy code
{
   "email": "email3@example.com",
   "password": "senha_secreta"
}
Contribuição
Contribuições para a API E-commerce são bem-vindas! Se você deseja contribuir, siga estas etapas:

Faça um fork do projeto.
Crie uma branch para a sua feature (git checkout -b feature/MinhaFeature).
Faça commit das suas mudanças (git commit -m 'Adicione minha feature').
Faça push para a branch (git push origin feature/MinhaFeature).
Abra um Pull Request.