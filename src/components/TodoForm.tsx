import React, { useState } from "react";
import type { Priority } from "../types";

interface Props {
  onAdd: (todo: { text: string; completed: boolean; deadline?: string; priority: Priority }) => void;
  dark: boolean;
}

export default function TodoForm({ onAdd, dark }: Props) {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState<Priority>("low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd({ text, completed: false, deadline, priority });
    setText("");
    setDeadline("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 transition-all
          ${
            dark
              ? "border-slate-700 bg-slate-800 text-slate-100 placeholder:text-slate-400 focus:ring-slate-500"
              : "border-amber-200 bg-white text-stone-800 placeholder:text-amber-400 focus:ring-amber-400"
          }`}
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className={`w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 transition-all
          ${
            dark
              ? "border-slate-700 bg-slate-800 text-slate-100 focus:ring-slate-500"
              : "border-amber-200 bg-white text-stone-800 focus:ring-amber-400"
          }`}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        className={`px-3 py-2 rounded-lg font-medium transition-colors ${
          priority === "high"
            ? "bg-red-600 text-white"
            : priority === "medium"
            ? "bg-yellow-400 text-black"
            : "bg-green-600 text-white"
        }`}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button
        className={`px-4 py-2 rounded-md font-medium transition-colors ${
          dark
            ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
            : "bg-amber-500 text-white hover:bg-amber-600"
        }`}
      >
        Add Todo
      </button>
    </form>
  );
}
