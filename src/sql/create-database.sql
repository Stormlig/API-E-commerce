CREATE DATABASE ecommerce_project 

CREATE TABLE
    users (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password TEXT NOT NULL,
        date VARCHAR(255) NOT NULL,
        cep VARCHAR(10) DEFAULT NULL,
        uf TEXT DEFAULT NULL,
        city VARCHAR(255) DEFAULT NULL
    );
    
    
    
CREATE TABLE Categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);


CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  categories_id integer references categories(id),
  mark TEXT,
  price DECIMAL(10, 2) NOT NULL
);

INSERT INTO categories (name, description) VALUES
('Blusa', 'Categoria de blusas de diferentes tipos e estilos.'),
('Calça', 'Categoria de calças para homens e mulheres.'),
('Bermuda', 'Categoria de bermudas casuais e esportivas.'),
('Sapatos', 'Categoria de calçados, incluindo tênis e sapatos formais.'),
('Bolsa', 'Categoria de bolsas femininas para várias ocasiões.'),
('Carteira', 'Categoria de carteiras para homens e mulheres.');

CREATE TABLE sales (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL,
  quantity INT NOT NULL,
  date_sale TIMESTAMP DEFAULT current_timestamp,
  value_unit_product NUMERIC NOT NULL,
  amount NUMERIC NOT NULL,
  form_of_payment VARCHAR NOT NULL,
  purchaser_id UUID NOT NULL,
  transaction_id VARCHAR,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL
);

CREATE TABLE Stocks (
  id SERIAL PRIMARY KEY,
  categories_id integer references categories(id),
  name_category TEXT,
  product_id UUID references products(id),
  quantity NUMERIC NOT NULL
);

CREATE TABLE cart_shopping (
  id SERIAL PRIMARY KEY,
  user_id UUID references users(id),
  product_id UUID references products(id),
  name VARCHAR(255) NOT NULL,
  price NUMERIC NOT NULL,
  quantity INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
