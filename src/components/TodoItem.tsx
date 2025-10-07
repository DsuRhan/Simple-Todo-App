import { useEffect, useState } from "react";
import type { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  dark: boolean;
}

export default function TodoItem({ todo, onToggle, onDelete, dark }: Props) {
  const [deleting, setDeleting] = useState(false);
  const [enter, setEnter] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setEnter(false), 300);
    return () => clearTimeout(timer);
  }, []);

const handleDelete = () => {
  const confirmDelete = window.confirm("Are you sure?");
  if (!confirmDelete) return;
  setDeleting(true);
  setTimeout(() => onDelete(todo.id), 300);
};


  const overdue =
    todo.deadline && new Date(todo.deadline).getTime() < Date.now() && !todo.completed;

  const priorityColor =
    todo.priority === "high"
      ? "border-red-500"
      : todo.priority === "medium"
      ? "border-yellow-400"
      : "border-green-400";

  return (
    <div
      className={`flex justify-between items-center p-3 rounded-lg border-l-4 ${priorityColor}
        transition-all duration-300 ease-out transform
        ${enter ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}
        ${deleting ? "opacity-0 translate-x-3 scale-95" : ""}
        ${dark ? "bg-slate-800 text-slate-100" : "bg-white text-stone-800 shadow-sm"}`}
    >
      <label className="flex items-center gap-3 cursor-pointer w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="accent-sky-400 w-5 h-5"
        />
        <div className="flex-1 min-w-0">
          <p
            className={`truncate ${
              todo.completed
                ? dark
                  ? "line-through text-slate-500"
                  : "line-through text-stone-400"
                : ""
            }`}
          >
            {todo.text}
          </p>
          {todo.deadline && (
            <p
              className={`text-xs mt-0.5 ${
                overdue
                  ? "text-red-400"
                  : dark
                  ? "text-slate-400"
                  : "text-stone-500"
              }`}
            >
              Due: {new Date(todo.deadline).toLocaleDateString()}
            </p>
          )}
        </div>
      </label>

      <button
        onClick={handleDelete}
        className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
          dark
            ? "bg-red-600 hover:bg-red-700 text-white"
            : "bg-red-500 hover:bg-red-600 text-white"
        }`}
      >
        Delete
      </button>
    </div>
  );
}
