CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    balance INTEGER
);

INSERT INTO accounts (name, balance)
VALUES
('Alice', 500),
('Bob', 1200),
('Charlie', 300);