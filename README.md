# ⛰️ API E-commerce

## Sobre o Projeto

A API E-commerce é uma aplicação RESTful que oferece suporte a operações CRUD simples, gerenciamento de produtos, controle de estoque, registros de vendas e funcionalidade de carrinho de compras. Ela é capaz de monitorar o estoque, efetuando a remoção dos itens vendidos

## 🛠️ Tecnologias Utilizadas

A API E-commerce foi desenvolvida utilizando as seguintes tecnologias:

- Node.js
- Express.js
- PostgreSQL
- Knex.js
- JWT (JSON Web Tokens)
- Bcrypt
- UUID
- Day.js (para manipulação de datas)

## 📄 Estrutura e Arquitetura

O projeto segue os princípios da arquitetura limpa e leva em consideração os princípios do SOLID. O código foi organizado de acordo com os princípios de modularidade, reutilização e responsabilidade única.

## 🎯 Endpoints da API

A seguir, detalhamos cada endpoint da API, incluindo exemplos de requisições:

## 🔏	Autenticação
Para usar a API, é necessário autenticar-se. Você deve obter um token JWT válido através do endpoint de login antes de acessar outros recursos. O token JWT deve ser incluído no cabeçalho de autorização de todas as solicitações subsequentes.

<hr>

###  Usuários

#### Cadastrar Usuário

- Método HTTP: POST
- URL: `http://localhost:8080/cadastrar`
- Exemplo de Requisição:

```json
{
  "name": "Nome Fictício",
  "email": "email13340@example.com",
  "password": "senha_secreta",
  "cep": "12345-678",
  "uf": "UF",
  "city": "Cidade Fictícia"
}
```

#### Login

- **Método HTTP:** POST
- **URL:** `http://localhost:8080/logar`
- **Exemplo de Requisição:**

```json
{
  "email": "email130@example.com",
  "password": "senha_secreta"
}
```

#### Atualizar um Usuário

- **Método HTTP:** PUT
- **URL:** `http://localhost:8080/atualizar`
- **Exemplo de Requisição:**
  
```json
{
  "email": "email14@example.com",
  "password": "senha_secreta",
  "cep": "876-54321",
  "uf": "FU",
  "city": "E verdade"
}
```

#### Excluir um Usuário

- **Método HTTP:** DELETE
- **URL:** `http://localhost:8080/excluir`
- **Exemplo de Requisição:**

```json
{
  "email": "email14@example.com",
  "password": "senha_secreta"
}
```

<hr>

### Produtos

#### Listar Todos os Produtos

- **Método HTTP:** GET
- **URL:** `http://localhost:8080/listar`

```json
{
    "id": "114741a0-83cd-4ec3-9579-ca500012b32a",
    "name": "Mizuno Sorayama",
    "description": "Tênis Mizuno Wave Prophecy Sorayama",
    "categories_id": 4,
    "mark": "Mizuno",
    "price": "300000.00"
  },
  {
    "id": "2ffd22e3-f52c-40e2-af75-50195ddd5648",
    "name": "Nike Vomero 17",
    "description": "Tenis Griff",
    "categories_id": 2,
    "mark": "Nike",
    "price": "259000.00"
  }
```

#### Registrar um Produto

- **Método HTTP:** POST
- **URL:** `http://localhost:8080/registrar`
- **Exemplo de Requisição:**

```json
{
  "name": "Nike",
  "description": "Tênis",
  "categories_id": 4,
  "mark": "Nike",
  "price": "300000",
  "quantity": 200
}
```

#### Atualizar um Produto

- **Método HTTP:** PUT
- **URL:** `http://localhost:8080/atualizarProduto`
- **Exemplo de Requisição:**

```json
{
  "id": "2ffd22e3-f52c-40e2-af75-50195ddd5648",
  "name": "Nike Vomero 17",
  "description": "Tenis Griff",
  "categories_id": 2,
  "mark": "Nike",
  "price": "259000"
}
```

#### Deletar um Produto

- **Método HTTP:** DELETE
- **URL:** `http://localhost:8080/excluirProduto/ a40ccebf-8c1d-4d05-a58d-6b0d62c75de1`

<hr>

### Compras

#### Registrar uma Compra

- **Método HTTP:** POST
- **URL:** `http://localhost:8080/venda`

```json
{
  "product_id": "2ffd22e3-f52c-40e2-af75-50195ddd5648",
  "quantity": 50,
  "form_of_payment": "credito",
  "card": {
    "number": "4242424242424242",
    "exp_month": 12,
    "exp_year": 2029,
    "cvc": 123
  }
}
```

#### Listar Todas as Vendas

- **Método HTTP:** GET
- **URL:** `http://localhost:8080/vendas`

```json
{
    "id": "e86e8d6d-82d3-420e-951c-e90445491e39",
    "product_id": "a40ccebf-8c1d-4d05-a58d-6b0d62c75de1",
    "quantity": 50,
    "date_sale": "2023-10-23T03:00:00.000Z",
    "value_unit_product": "25900.00",
    "amount": "1295000",
    "form_of_payment": "credito",
    "purchaser_id": "059d2492-8c8e-41c9-8acf-e957202361be",
    "transaction_id": "ch_3O4TGGJOG7t7O2BE0D3C9gkm",
    "name": "Nome Fictício",
    "email": "email130@example.com"
  },
  {
    "id": "dd22d497-16b3-47cd-b769-a1868c5b1691",
    "product_id": "2ffd22e3-f52c-40e2-af75-50195ddd5648",
    "quantity": 50,
    "date_sale": "2023-10-23T03:00:00.000Z",
    "value_unit_product": "300000.00",
    "amount": "15000000",
    "form_of_payment": "credito",
    "purchaser_id": "059d2492-8c8e-41c9-8acf-e957202361be",
    "transaction_id": "ch_3O4TH9JOG7t7O2BE0Di2Ts34",
    "name": "Nome Fictício",
    "email": "email130@example.com"
  }
```

#### Listar Venda por ID

- **Método HTTP:** GET
- **URL:** `http://localhost:8080/vendas/ 114741a0-83cd-4ec3-9579-ca500012b32a`

```json
{
    "id": "2ef2821f-5aa8-4fdf-a708-78cf5f19e405",
    "product_id": "2ffd22e3-f52c-40e2-af75-50195ddd5648",
    "quantity": 50,
    "date_sale": "2023-10-23T03:00:00.000Z",
    "value_unit_product": "300000.00",
    "amount": "15000000",
    "form_of_payment": "credito",
    "purchaser_id": "059d2492-8c8e-41c9-8acf-e957202361be",
    "transaction_id": "ch_3O4TIJJOG7t7O2BE0Wb5dmBd",
    "name": "Nome Fictício",
    "email": "email130@example.com"
}
```

<hr>

### Estoque

#### Listar Estoque

- **Método HTTP:** GET
- **URL:** `http://localhost:8080/listarEstoque`

```json
{
    "id": 9,
    "categories_id": 4,
    "name_category": "Sapatos",
    "product_id": "2ffd22e3-f52c-40e2-af75-50195ddd5648",
    "quantity": "100"
}
```

#### Deletar um Item do Estoque

- **Método HTTP:** DELETE
- **URL:** `http://localhost:8080/deletarEstoque/ 114741a0-83cd-4ec3-9579-ca500012b32a`


#### Atualizar Estoque

- **Método HTTP:** PUT
- **URL:** `http://localhost:8080/atualizarEstoque`

```json
{
  "productId": "114741a0-83cd-4ec3-9579-ca500012b32a",
  "quantity": "100"
}
```

<hr>

### Categorias

#### Listar Categorias
- **Método HTTP:** GET
- **URL:** `http://localhost:8080/listarCategorias`

```json
{
    "id": 1,
    "name": "Blusa",
    "description": "Categoria de blusas de diferentes tipos e estilos."
  },
  {
    "id": 2,
    "name": "Calça",
    "description": "Categoria de calças para homens e mulheres."
  },
  {
    "id": 3,
    "name": "Bermuda",
    "description": "Categoria de bermudas casuais e esportivas."
  },
  {
    "id": 4,
    "name": "Sapatos",
    "description": "Categoria de calçados, incluindo tênis e sapatos formais."
  },
  {
    "id": 5,
    "name": "Bolsa",
    "description": "Categoria de bolsas femininas para várias ocasiões."
  },
  {
    "id": 6,
    "name": "Carteira",
    "description": "Categoria de carteiras para homens e mulheres."
  }
```

#### Cadastrar Categorias

- **Método HTTP:** POST
- **URL:** `http://localhost:8080/cadastrarCategorias`

```json
{
  "name": "esportivos",
  "description": "artigos esportivos como: luvas, pé de pato, oculos de natação..."
}
```

<hr>

### Carrinho de Compras

#### Adicionar Item ao Carrinho

- **Método HTTP:** POST
- **URL:** `http://localhost:8080/carrinho/addItem`

```json
{
  "product_id": "114741a0-83cd-4ec3-9579-ca500012b32a",
  "name": "nome do produto",
  "price": 2000,
  "quantity": 15
}
```
#### Listar Itens do Carrinho

- **Método HTTP:** GET
- **URL:** `http://localhost:8080/carrinho/listar`


#### Remover Item do Carrinho

- **Método HTTP:** DELETE
- **URL:** `http://localhost:8080/carrinho/removerItem/114741a0-83cd-4ec3-9579-ca500012b32a`

<br>
<br>
<br>

# 🖋️ Contribuindo para a API E-commerce

Agradecemos pelo seu interesse em contribuir para a API E-commerce. Sua ajuda é valiosa para melhorar e expandir nossa aplicação. Abaixo estão as diretrizes e os passos para contribuir com nosso projeto.

## Como Contribuir

### 1. Clonando o Repositório

Antes de começar, você precisará clonar o repositório da API E-commerce no seu ambiente de desenvolvimento local:

```bash
git clone https://github.com/seu-usuario/API_Ecommerce.git
cd API_Ecommerce
```

## Instalando Dependências
Certifique-se de ter Node.js instalado no seu sistema. Em seguida, instale as dependências necessárias:
```
npm install
```
ou
```
yarn install
```

## Criando uma Branch
Antes de iniciar qualquer trabalho, crie uma branch separada para a sua contribuição. Use um nome descritivo para a sua branch:
```
git checkout -b feature/nova-funcionalidade
```

## Fazendo Alterações
Faça as alterações necessárias no código, adicione novos recursos ou correções de bugs.

<br>

## Testando
Garanta que suas alterações não quebraram nenhum recurso existente. Execute os testes e certifique-se de que todos passam:
```
npm test
```
ou
```
yarn test
```

## Documentando
Mantenha a documentação atualizada. Se você adicionou novos recursos, verifique se eles estão devidamente documentados no README.

<br>

## Compromissos e Push
Após concluir suas alterações e testá-las, faça um commit das alterações:
```
git add .
git commit -m "Adicionando nova funcionalidade"
```

Em seguida, envie suas alterações para o repositório:

```
git push origin feature/nova-funcionalidade
```

## Solicitando um Pull Request (PR)

Vá para o repositório no GitHub e crie um Pull Request para que sua contribuição seja revisada. Certifique-se de descrever suas alterações e fornecer informações contextuais.

## Revisão e Fusão
Após criar um Pull Request, nossa equipe revisará suas alterações e fornecerá feedback. Uma vez aprovado, suas alterações serão mescladas no projeto principal.

## Diretrizes Gerais

- Mantenha o código limpo e legível.
- Siga as boas práticas de desenvolvimento.
- Respeite as convenções de nomenclatura existentes.
- Documente adequadamente as alterações, recursos ou correções.

<hr>

***Agradecemos pela sua contribuição e esperamos trabalhar juntos para tornar a API E-commerce ainda melhor. Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato conosco. Juntos, podemos criar uma API mais robusta e eficiente.***
