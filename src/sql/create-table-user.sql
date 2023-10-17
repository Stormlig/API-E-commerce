--DROP TABLE IF EXISTS "Users";

CREATE TABLE
    Users (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password TEXT NOT NULL,
        date VARCHAR(255) NOT NULL,
        cep VARCHAR(10) DEFAULT NULL,
        uf TEXT DEFAULT NULL,
        city VARCHAR(255) DEFAULT NULL
    );