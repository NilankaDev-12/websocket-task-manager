import React, { useState } from "react";
import axios from "axios";

const Output = ({ tasks, setTasks }) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.filter((t) => t._id !== id)); // remove from state instantly
    } catch (error) {
      console.error(error);
    }
  };

  // Update task
  const updateTask = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/tasks/${id}`, {
        title: editTitle,
      });
      setTasks(tasks.map((t) => (t._id === id ? res.data : t))); // update state instantly
      setEditId(null);
      setEditTitle("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="flex justify-between items-center border p-2"
        >
          {editId === task._id ? (
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="border p-1 w-full"
            />
          ) : (
            <span>{task.title}</span>
          )}

          <div className="flex gap-2">
            {editId === task._id ? (
              <button
                onClick={() => updateTask(task._id)}
                className="bg-blue-600 text-white px-3"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditId(task._id);
                  setEditTitle(task.title);
                }}
                className="bg-yellow-500 text-white px-3"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-600 text-white px-3"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Output;
