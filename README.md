# 🚀 WebSocket Task Manager

A real-time task management application built with WebSockets, featuring a Node.js backend and a React frontend.

## 📁 Project Structure

- **Backend/**: Node.js server with Express, Socket.io, and MongoDB
- **Frontend/**: React application built with Vite
- **docker-compose.yml**: Docker Compose configuration for running the full stack

## ✨ Features

- ⚡ Real-time task updates via WebSockets
- ➕ Add, edit, and delete tasks
- 📱 Responsive UI with React
- 💾 MongoDB for data persistence

## 🛠️ Prerequisites

- 🐳 Docker and Docker Compose
- 🟢 Node.js (for local development)
- 🍃 MongoDB (if running locally without Docker)

## 🚀 Quick Start with Docker

1. 📥 Clone the repository
2. 📂 Navigate to the project directory
3. ▶️ Run `docker-compose up --build`
4. 🌐 Open your browser to `http://localhost:3000`

## 💻 Local Development

### Backend

1. 📂 Navigate to `Backend/`
2. 📦 Install dependencies: `npm install`
3. ▶️ Start the server: `npm start`

### Frontend

1. 📂 Navigate to `Frontend/`
2. 📦 Install dependencies: `npm install`
3. 🚀 Start the development server: `npm run dev`

## 🔧 Environment Variables

Create a `.env` file in the Backend directory with:

```
MONGO_URI=mongodb://localhost:27017/websocket-task-manager
PORT=5000
```

## 🔌 API Endpoints

- `GET /api/tasks`: 📋 Get all tasks
- `POST /api/tasks`: ➕ Create a new task
- `PUT /api/tasks/:id`: ✏️ Update a task
- `DELETE /api/tasks/:id`: 🗑️ Delete a task

## 🔄 WebSocket Events

- `taskAdded`: ➕ Emitted when a new task is added
- `taskUpdated`: ✏️ Emitted when a task is updated
- `taskDeleted`: 🗑️ Emitted when a task is deleted

## 🛠️ Technologies Used

- **Backend**: 🟢 Node.js, ⚡ Express, 🔌 Socket.io, 🍃 Mongoose
- **Frontend**: ⚛️ React, ⚡ Vite, 🔌 Socket.io-client
- **Database**: 🍃 MongoDB
- **Containerization**: 🐳 Docker, 🐳 Docker Compose


## 📄 License

MIT License