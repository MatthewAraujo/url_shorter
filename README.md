# Hotel Booking API

A robust and scalable REST API for hotel booking management built with NestJS, TypeScript, and Prisma.

## Features

- User authentication and authorization
- Hotel management
- Room management with different types (Single, Double, Suite)
- Reservation system
- Review and rating system
- Role-based access control

## Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Zod
- **Testing**: Vitest
- **Code Quality**: Biome
- **Package Manager**: pnpm

## Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm (v10.6.5 or higher)
- PostgreSQL (for production)
- Docker (optional, for containerization)

## API Documentation

### Core Entities

- **User**: Authentication and user management
- **Hotel**: Hotel information and management
- **Room**: Room types and availability
- **Reservation**: Booking management
- **Review**: User reviews and ratings

### Authentication

The API uses JWT for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-token>
```

## Code Quality

Run linter:
```bash
pnpm lint
```

Fix linting issues:
```bash
pnpm lint:fix
```
