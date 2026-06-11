<<<<<<< HEAD
# cloud-banking-api
=======
# Cloud Banking API

A containerized banking platform built using Docker, Flask, Nginx, and PostgreSQL.

## Architecture

Browser
↓
Nginx Reverse Proxy
↓
Flask API
↓
PostgreSQL
↓
Docker Volume

## Features

- Multi-container architecture
- Docker Compose orchestration
- Nginx reverse proxy
- PostgreSQL database
- Persistent Docker volumes
- REST API endpoints
- Internal container networking

## Endpoints

### Get all accounts

GET /accounts

### Get balance

GET /balance/<id>

## Technologies

- Docker
- Docker Compose
- Python
- Flask
- PostgreSQL
- Nginx

## Run

```bash
docker compose up --build
```

Then open:

```txt
http://localhost/accounts
```

or

```txt
http://localhost/balance/1
```
>>>>>>> ee0d37b (Initial commit)
