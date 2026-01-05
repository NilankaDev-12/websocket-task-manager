import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import Input from "./components/Input";
import Output from "./components/Output";

const socket = io("http://localhost:5000"); // connect to backend

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();

    // Socket.IO listeners
    socket.on("taskAdded", (task) => {
      setTasks((prev) => [task, ...prev]);
    });

    socket.on("taskUpdated", (updatedTask) => {
      setTasks((prev) =>
        prev.map((t) => (t._id === updatedTask._id ? updatedTask : t))
      );
    });

    socket.on("taskDeleted", (id) => {
      setTasks((prev) => prev.filter((t) => t._id !== id));
    });

    // Cleanup on unmount
    return () => {
      socket.off("taskAdded");
      socket.off("taskUpdated");
      socket.off("taskDeleted");
    };
  }, []);

  return (
    <div className="mx-auto w-3xl p-5">
      <Input />
      <Output tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
