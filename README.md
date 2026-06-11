# Cloud Banking API

A containerized banking platform built with Docker, Flask, Nginx, and PostgreSQL.

## Architecture

```text
Browser
  ↓
Nginx Reverse Proxy
  ↓
Flask API
  ↓
PostgreSQL
  ↓
Docker Volume
```

## Features

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

```text
http://localhost/accounts
```

or:

```text
http://localhost/balance/1
```
