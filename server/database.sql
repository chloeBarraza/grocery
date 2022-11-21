CREATE DATABASE grocerylist;

CREATE TABLE groceries(
    grocery_id SERIAL PRIMARY KEY,
    description VARCHAR(500)
);