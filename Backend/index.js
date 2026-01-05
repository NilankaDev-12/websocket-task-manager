import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import connectDB from "./db.js";
import Task from "./taskModel.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // allow all origins inside Docker
    credentials: true,
  },
});

app.use(cors());
app.use(express.json());

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.on("disconnect", () => console.log("User disconnected:", socket.id));
});

// CRUD routes with Socket.IO events
app.post("/add", async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.create({ title });
    io.emit("taskAdded", task);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title },
      { new: true }
    );
    io.emit("taskUpdated", task);
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    io.emit("taskDeleted", req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5000;
const startServer = async () => {
  await connectDB();
  server.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
};

startServer();
