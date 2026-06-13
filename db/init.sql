CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    balance INTEGER
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    from_account_id INTEGER,
    to_account_id INTEGER,
    transaction_type VARCHAR(20),
    amount INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO accounts (name, balance)
VALUES
('Alice', 500),
('Bob', 1200),
('Charlie', 300);

