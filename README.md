# Cloud Banking API

A containerized banking platform built with Docker, Flask, Nginx, and PostgreSQL.
<<<<<<< HEAD

## Overview

This project demonstrates a production-style multi-container architecture using Docker Compose. Requests are routed through an Nginx reverse proxy to a Flask API, which communicates with a PostgreSQL database. Database data is persisted using Docker volumes.
=======
>>>>>>> 98c5647 (Add deposit withdraw and transfer endpoints)

## Architecture

```text
Browser
<<<<<<< HEAD
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
=======
  ↓
Nginx Reverse Proxy
  ↓
Flask API
  ↓
PostgreSQL
  ↓
>>>>>>> 98c5647 (Add deposit withdraw and transfer endpoints)
Docker Volume
```

## Features

<<<<<<< HEAD
- Multi-container Docker architecture
- Nginx reverse proxy
- Flask REST API
- PostgreSQL database integration
- Persistent storage with Docker volumes
- Internal Docker networking
- Account and balance retrieval endpoints
=======
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
GET /balance/<id>
```
>>>>>>> 98c5647 (Add deposit withdraw and transfer endpoints)

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
<<<<<<< HEAD
```

## Future Enhancements

- Deposit endpoint
- Withdrawal endpoint
- Transfer endpoint
- Transaction history
- Redis caching
- JWT authentication
- Health checks and monitoring

## Author

Tadiwa Hukuimwe
Cybersecurity | Cloud & Security Enthusiast
=======
```
>>>>>>> 98c5647 (Add deposit withdraw and transfer endpoints)
