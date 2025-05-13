```markdown
# 🔗 URL Shortener Backend

A complete URL shortener backend implementation using **NestJS**, **Prisma**, **PostgreSQL**, and **Traefik** as a reverse proxy. Fully containerized with Docker Compose, this project offers a RESTful API for creating and managing short links, with dynamic redirection based on path.

---

## 📦 Stack

- **Backend Framework**: [NestJS](https://nestjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL
- **Proxy**: [Traefik](https://traefik.io/) (v3)
- **Containerization**: Docker + Docker Compose

---

## 🚀 Features

- 🔗 Create and manage short URLs
- 🔁 Dynamic redirection based on path
- 🌐 Reverse proxy routing with Traefik
- 🧠 Click metrics (IP, User-Agent, Timestamp)
- ⚙️ Fully containerized environment

---


## 🐳 Running the Project

### Prerequisites

- Docker
- Docker Compose

### 1. Clone the Repo

```bash
git clone https://github.com/MatthewAraujo/url_shorter.git
cd url-shorter
````

### 2. Set Up Environment

Create a `.env` file:

```env
DATABASE_URL=postgresql://postgres:docker@postgres:5432/short
BASE_URL=http://localhost
PORT=3000
REVERSE_PROXY_PORT=9000
```

### 3. Start Containers

```bash
docker compose up --build
```

This will start:

* PostgreSQL
* Traefik (on port `9000`)
* NestJS backend (proxied via Traefik)

---

## 📡 API Endpoints

### POST `/api/shorten`

Create a short link.

**Body:**

```json
{
  "url": "https://example.com/very/long/link"
}
```

**Response:**

```json
{
  "short_url": "http://localhost:9000/abc123",
  "original_url": "https://example.com/very/long/link"
}
```

---

### GET `/:short_code`

Redirects to the original URL.

Example:

```bash
curl -i http://localhost:9000/abc123
```

Returns a `302 Found` redirect.

---

### GET `/api/links`

List all shortened URLs with click counts.

---

### DELETE `/api/links/:short_code`

Delete a shortened URL by its code.

---

## ⚙️ Traefik Configuration

The `traefik.toml` sets up entry points and file providers. The `conf.toml` inside `/traefik/conf/` defines the dynamic routes.

Example route:

```toml
[http.routers.api-router]
  rule = "PathPrefix(`/api`)"
  entryPoints = ["shortener"]
  service = "nest-service"
  middlewares = ["strip-api-prefix"]
```