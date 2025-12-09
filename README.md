# TodoMate - Task Management Application

A full-stack todo application built with React, Node.js, Express, and PostgreSQL, containerized with Docker.

## Features

- Add tasks with title and description
- View up to 5 most recent pending tasks
- Mark tasks as complete
- Responsive design with Material-UI

## Tech Stack

- **Frontend**: React, Vite, TailwindCSS, Material-UI
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose

## Running with Docker

```bash
docker compose up --build
```

Access the application at http://localhost:3000

## Running Tests

Frontend:

```bash
cd frontend
npm test
```

Backend:

```bash
cd backend
npm test
```
