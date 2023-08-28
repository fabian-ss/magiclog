CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    role INTEGER NOT NULL, 
    name VARCHAR(120) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sku VARCHAR(255) UNIQUE NOT NULL,
    count INT NOT NULL, 
    price NUMERIC NOT NULL,
    user_id INTEGER references users(id),
	created TIMESTAMP default current_timestamp,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);
