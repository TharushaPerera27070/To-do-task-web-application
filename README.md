# TodoMate - Task Management Application

A full-stack to-do task web application built with React, Node.js, Express, and PostgreSQL, containerized with Docker.

**This project was created as a Full Stack Engineer/Intern Take-Home Assessment.**

## Features

- Add tasks with title and description
- View up to 5 most recent pending tasks
- Mark tasks as complete
- Responsive design with Material-UI
- Fully containerized with Docker

## Tech Stack

- **Frontend**: React, Vite, TailwindCSS, Material-UI
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Containerization**: Docker, Docker Compose

## Prerequisites

- Docker and Docker Compose installed
- Node.js 24+ (for local development without Docker)

## Getting Started

### Using Docker (Recommended)

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd To-do-task-web-application
   ```

2. **Start Docker Desktop** (make sure Docker Engine is running)

3. Start the application:

   ```bash
   docker compose up --build
   ```

4. Open your browser and navigate to:
   - **Frontend**: http://localhost:3000
   - **Backend API**: http://localhost:5000/task

### Local Development (Without Docker)

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd To-do-task-web-application
   ```

2. Create backend environment file:

   ```bash
   cd backend
   cat > .env << EOF
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASSWORD=your-password
   DB_NAME=taskdb
   PORT=5000
   EOF
   ```

3. Setup PostgreSQL database:

   ```bash
   psql -U postgres
   \i database/init.sql
   ```

4. Install and run backend:

   ```bash
   npm install
   npm start
   ```

5. Setup frontend (in a new terminal):

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

6. Open http://localhost:5173 in your browser

## Running Tests

Frontend:

```bash
cd frontend
npm install
npm test
```

Backend:

```bash
cd backend
npm install
npm test
```

## Project Structure

```
├── backend/                 # Node.js/Express API
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── routes/             # API routes
│   ├── tests/              # Unit tests
│   ├── .env.example        # Environment variables template
│   └── Dockerfile
├── frontend/               # React/Vite application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── ui/             # UI components
│   │   └── testing/        # Component tests
│   └── Dockerfile
├── database/               # Database initialization
│   └── init.sql
└── docker-compose.yml      # Docker Compose configuration
```

## API Endpoints

- `GET /task` - Get all pending tasks (limited to 5 most recent)
- `POST /task` - Create a new task
- `PUT /task/:id` - Mark a task as completed

## Environment Variables

### Backend (`.env`)

Create a `.env` file in the `backend` directory:

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your-password
DB_NAME=taskdb
PORT=5000
```

**Note:** Never commit `.env` files to version control. Use `.env.example` as a template.

## Docker Commands

Useful commands for managing Docker containers:

```bash
# Start services in the background
docker compose up -d

# Stop all services
docker compose down

# View logs from all services
docker compose logs -f

# View logs from specific service
docker compose logs -f backend

# Check database
docker exec todo_db psql -U postgres -d taskdb -c "SELECT * FROM task;"

# Rebuild services
docker compose up --build --force-recreate
```

## Troubleshooting

**Port already in use:**
Change ports in [`docker-compose.yml`](docker-compose.yml) or stop conflicting services:

```bash
# Find process using port 3000
lsof -i :3000
# Kill the process
kill -9 <PID>
```

**Database connection error:**
Ensure PostgreSQL is running and credentials match [`backend/.env`](backend/.env)

**Frontend can't reach API:**
Verify `VITE_API_URL` environment variable in [`docker-compose.yml`](docker-compose.yml)

## Assessment Requirements Met

✅ Full-stack application with frontend, backend, and database  
✅ Docker containerization with Docker Compose  
✅ Task management features (add, view, complete)  
✅ Database persistence with PostgreSQL  
✅ Responsive UI with React and Material-UI  
✅ RESTful API backend with Express.js  
✅ Environment variable management  
✅ Comprehensive documentation

## License

This project is open source and available under the MIT License.
