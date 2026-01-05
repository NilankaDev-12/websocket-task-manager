# WebSocket Task Manager Frontend

A modern, real-time task management application frontend built with React and Vite. This application provides a responsive user interface for managing tasks with live updates via WebSocket connections.

## 🚀 Features

- **Real-time Updates**: Instant task synchronization using Socket.IO
- **Responsive Design**: Mobile-first UI built with TailwindCSS
- **Modern React**: Built with React 19 and hooks
- **Fast Development**: Powered by Vite for lightning-fast builds
- **Type Safety**: TypeScript support for better development experience
- **Clean Architecture**: Well-structured components and state management

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Real-time Communication**: Socket.IO Client
- **HTTP Client**: Axios
- **Language**: JavaScript (with TypeScript support)
- **Linting**: ESLint

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Backend Server** running on `http://localhost:5000` (WebSocket Task Manager Backend)

## 🔧 Installation

1. **Clone the repository** (if applicable) or navigate to the frontend directory:
   ```bash
   cd websocket-task-manager/Frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📖 Usage

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

## 🏗️ Project Structure

```
Frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable React components
│   │   ├── Input.jsx      # Task input component
│   │   └── Output.jsx     # Task display component
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── Dockerfile             # Docker configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🔌 API Integration

This frontend connects to a backend server running on `http://localhost:5000` with the following endpoints:

- `GET /tasks` - Fetch all tasks
- `POST /add` - Add a new task
- WebSocket events:
  - `taskAdded` - New task created
  - `taskUpdated` - Task modified
  - `taskDeleted` - Task removed

## 🐳 Docker Support

Build and run the application using Docker:

```bash
# Build the Docker image
docker build -t websocket-task-manager-frontend .

# Run the container
docker run -p 5173:5173 websocket-task-manager-frontend
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all linting checks pass

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Nilanka Roy** - *Initial work* - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite Team for the fast build tool
- TailwindCSS for the utility-first CSS framework
- Socket.IO for real-time communication

---

**Note**: This frontend application requires a compatible backend server to function properly. Make sure the WebSocket Task Manager Backend is running and accessible.
