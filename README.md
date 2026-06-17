# Cloud Banking API

A containerized banking platform built with Docker, Flask, Nginx, and PostgreSQL.


## Overview

This project demonstrates a production-style multi-container architecture using Docker Compose. Requests are routed through an Nginx reverse proxy to a Flask API, which communicates with a PostgreSQL database. Database data is persisted using Docker volumes.



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

## Features


- Multi-container Docker architecture
- Nginx reverse proxy
- Flask REST API
- PostgreSQL database integration
- Persistent storage with Docker volumes
- Internal Docker networking
- Account and balance retrieval endpoints
- Multi-container architecture.
- Docker Compose orchestration.
- Nginx reverse proxy.
- PostgreSQL database.
- Persistent Docker volumes.
- REST API endpoints.
- Internal container networking.

## Endpoints

### Get all accounts

```http
GET /accounts
```

### Get balance

```http
GET /balance/<id
```

### Deposit

```http
POST /deposit
```

### Withdraw

```http
POST /withdraw
```

### Transfer

```http
POST /transfer
```

### Transaction History

```http
GET /transactions
```


## Technologies

- Docker
- Docker Compose
- Python
- Flask
- PostgreSQL
- Nginx

## API Endpoints

### Get all accounts

```http
GET /accounts
```

### Get account balance

```http
GET /balance/<id>
```

Example:

```http
GET /balance/1
```

## Run Locally

```bash
docker compose up --build
```

Open:

```text
http://localhost/accounts
```

or:

```text
http://localhost/balance/1
```

## Future Enhancements

- Redis caching
- JWT authentication
- Health checks and monitoring

## Author

Tadiwa Hukuimwe
Cybersecurity | Cloud & Security Enthusiast


