import React, { useState } from "react";
import axios from "axios";

const Input = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleAdd = async () => {
    if (!title.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/add", { title });
      setTitle("");
      onTaskAdded(res.data); // call parent to refresh task list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add Task"
        className="border p-2 w-full"
      />
      <button onClick={handleAdd} className="bg-green-600 text-white px-5">
        Add
      </button>
    </div>
  );
};

export default Input;
