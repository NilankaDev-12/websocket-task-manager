# WebSocket Task Manager Backend

[![Node.js](https://img.shields.io/badge/Node.js-20-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-blue.svg)](https://expressjs.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8.3-black.svg)](https://socket.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.1.1-green.svg)](https://www.mongodb.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A real-time task management backend built with Node.js, Express, Socket.IO, and MongoDB. This service provides RESTful APIs for task CRUD operations and real-time updates via WebSockets.

## Features

- **Real-time Updates**: Instant task synchronization across clients using Socket.IO
- **RESTful API**: Complete CRUD operations for tasks
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **CORS Enabled**: Configurable cross-origin resource sharing
- **Docker Support**: Containerized deployment ready
- **Environment Configuration**: Flexible database connection via environment variables

## Tech Stack

- **Runtime**: Node.js 20
- **Framework**: Express.js
- **Real-time Communication**: Socket.IO
- **Database**: MongoDB with Mongoose
- **Containerization**: Docker

## Prerequisites

- Node.js 20 or higher
- MongoDB (local or cloud instance)
- npm or yarn package manager

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd websocket-task-manager/Backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/your-database-name
   PORT=5000
   ```

4. **Start MongoDB**:
   Ensure MongoDB is running on your system or provide a cloud MongoDB URI.

## Usage

### Development
```bash
npm run dev
```
Starts the server with nodemon for automatic restarts on file changes.

### Production
```bash
npm start
```
Starts the server in production mode.

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Tasks

| Method | Endpoint     | Description          | Request Body          | Response |
|--------|--------------|----------------------|-----------------------|----------|
| GET    | `/tasks`    | Get all tasks       | -                     | Array of tasks |
| POST   | `/add`      | Create a new task   | `{ "title": "string" }` | Created task |
| PUT    | `/tasks/:id`| Update a task       | `{ "title": "string" }` | Updated task |
| DELETE | `/tasks/:id`| Delete a task       | -                     | Success message |

### WebSocket Events

The server emits the following events to connected clients:

- `taskAdded`: Fired when a new task is created
- `taskUpdated`: Fired when a task is updated
- `taskDeleted`: Fired when a task is deleted

## Environment Variables

| Variable  | Default                     | Description |
|-----------|-----------------------------|-------------|
| MONGO_URI | mongodb://localhost:27017/mydatabase | MongoDB connection string |
| PORT      | 5000                        | Server port |

## Docker Deployment

Build and run the application using Docker:

```bash
# Build the image
docker build -t websocket-task-manager-backend .

# Run the container
docker run -p 5000:5000 -e MONGO_URI=<your-mongo-uri> websocket-task-manager-backend
```

## Project Structure

```
Backend/
├── db.js              # Database connection
├── index.js           # Main server file
├── taskModel.js       # Task data model
├── package.json       # Dependencies and scripts
├── Dockerfile         # Docker configuration
└── README.md          # This file
```


## Testing

Currently, no tests are implemented. To add tests:

1. Install testing framework (e.g., Jest, Mocha)
2. Write unit and integration tests
3. Update package.json scripts

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.


## Roadmap

- [ ] Add user authentication
- [ ] Implement task categories/tags
- [ ] Add API documentation with Swagger
- [ ] Write comprehensive tests
- [ ] Add logging middleware
- [ ] Implement rate limiting</content>
<parameter name="filePath">c:\Users\ADMIN\Desktop\websocket-task-manager\Backend\README.md