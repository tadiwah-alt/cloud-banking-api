# Cloud Banking API

A containerized banking platform built with Docker, Flask, Nginx, and PostgreSQL.

## Overview

Cloud Banking API is a backend banking application designed to demonstrate modern containerized application architecture. The project uses Docker Compose to orchestrate multiple services, including a Flask API, PostgreSQL database, and Nginx reverse proxy.

The application supports account management, deposits, withdrawals, transfers, and transaction history tracking while maintaining persistent storage through Docker volumes.

---

## Architecture

```text
Browser
   │
   ▼
Nginx Reverse Proxy
   │
   ▼
Flask API
   │
   ▼
PostgreSQL Database
   │
   ▼
Docker Volume
```

### Request Flow

1. User sends a request from a web browser or API client.
2. Nginx receives the request and forwards it to Flask.
3. Flask processes the request and executes business logic.
4. PostgreSQL stores and retrieves account data.
5. Docker volumes persist database data across container restarts.
6. Flask returns a JSON response to the client.

---

## Features

- Multi-container Docker architecture
- Docker Compose orchestration
- Nginx reverse proxy
- Flask REST API
- PostgreSQL database integration
- Persistent Docker volumes
- Internal Docker networking
- Account balance management
- Deposit operations
- Withdrawal operations
- Account-to-account transfers
- Transaction audit logging
- JSON API responses
- Input validation and error handling

---

## Technology Stack

| Technology | Purpose |
|------------|----------|
| Docker | Containerization |
| Docker Compose | Service orchestration |
| Python | Application language |
| Flask | REST API framework |
| PostgreSQL | Relational database |
| Nginx | Reverse proxy |
| Docker Volumes | Persistent storage |

---

## Database Schema

### Accounts Table

| Column | Type |
|----------|----------|
| id | SERIAL PRIMARY KEY |
| name | VARCHAR(100) |
| balance | INTEGER |

### Transactions Table

| Column | Type |
|----------|----------|
| id | SERIAL PRIMARY KEY |
| from_account_id | INTEGER |
| to_account_id | INTEGER |
| transaction_type | VARCHAR(20) |
| amount | INTEGER |
| created_at | TIMESTAMP |

---

## API Endpoints

### Get All Accounts

```http
GET /accounts
```

Example Response:

```json
[
  {
    "id": 1,
    "name": "Alice",
    "balance": 500
  }
]
```

---

### Get Account Balance

```http
GET /balance/<id>
```

Example:

```http
GET /balance/1
```

Response:

```json
{
  "account_id": "1",
  "balance": 500
}
```

---

### Deposit Funds

```http
POST /deposit
```

Request Body:

```json
{
  "account_id": 1,
  "amount": 200
}
```

Response:

```json
{
  "success": true,
  "account_id": 1,
  "deposited": 200,
  "new_balance": 700
}
```

---

### Withdraw Funds

```http
POST /withdraw
```

Request Body:

```json
{
  "account_id": 1,
  "amount": 100
}
```

Response:

```json
{
  "success": true,
  "account_id": 1,
  "withdrawn": 100,
  "new_balance": 600
}
```

---

### Transfer Funds

```http
POST /transfer
```

Request Body:

```json
{
  "from_account_id": 1,
  "to_account_id": 2,
  "amount": 100
}
```

Response:

```json
{
  "success": true,
  "transferred": 100,
  "from_account": {
    "account_id": 1,
    "new_balance": 400
  },
  "to_account": {
    "account_id": 2,
    "new_balance": 1300
  }
}
```

---

### View Transaction History

```http
GET /transactions
```

Example Response:

```json
[
  {
    "id": 3,
    "from_account_id": 1,
    "to_account_id": 2,
    "transaction_type": "TRANSFER",
    "amount": 100,
    "created_at": "2026-06-17T12:30:00"
  }
]
```

---


## Screenshots

### Docker Containers

![Docker Containers](screenshots/docker-containers.png)

### Accounts Endpoint

![Accounts](screenshots/accounts-endpoint.png)

### Transfer Example

![Transfer](screenshots/transfer-example.png)

### Transaction History

![Transactions](screenshots/transactions-history.png)




## Running Locally

### Clone Repository

```bash
git clone https://github.com/tadiwah-alt/cloud-banking-api.git
cd cloud-banking-api
```

### Start Application

```bash
docker compose up --build
```

### Access Application

Accounts:

```text
http://localhost/accounts
```

Balance:

```text
http://localhost/balance/1
```

Transactions:

```text
http://localhost/transactions
```

---

## Docker Components

### Nginx Container

Responsibilities:

- Internet-facing service
- Receives browser requests
- Forwards requests to Flask

### Flask Container

Responsibilities:

- Business logic
- API endpoints
- Database communication

### PostgreSQL Container

Responsibilities:

- Stores account information
- Stores transaction history
- Handles SQL queries

### Docker Volume

Responsibilities:

- Persists PostgreSQL data
- Survives container recreation
- Prevents data loss

---

## Example Banking Workflow

Starting balances:

```text
Alice   = 500
Bob     = 1200
Charlie = 300
```

Operations:

1. Deposit $200 into Alice
2. Withdraw $50 from Alice
3. Transfer $100 from Alice to Bob

Final balances:

```text
Alice   = 550
Bob     = 1300
Charlie = 300
```

Transaction records created:

```text
DEPOSIT
WITHDRAW
TRANSFER
```

Total transaction rows:

```text
3
```

---

## Technical Concepts Demonstrated

- Docker Networking
- Container Communication
- Reverse Proxy Architecture
- REST API Design
- Database Transactions
- ACID Principles
- Persistent Storage
- Input Validation
- Error Handling
- Multi-Service Applications

---

## Future Enhancements

- JWT Authentication
- User Registration and Login
- Transaction Filtering
- Redis Caching
- Row-Level Database Locking
- Health Checks
- Monitoring and Logging
- GitHub Actions CI/CD
- AWS ECS Deployment
- Kubernetes Deployment

---

## Author

**Tadiwa Hukuimwe**

Cybersecurity Graduate | Cloud Security Enthusiast | Backend & Cloud Engineering

GitHub:
https://github.com/tadiwah-alt
