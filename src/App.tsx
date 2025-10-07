import { useEffect, useMemo, useState } from "react";
import type { Todo, Filter } from "./types";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import ThemeToggle from "./components/ThemeToggle";

const STORAGE_KEY = "todo_app_v2";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState<Filter>("all");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

useEffect(() => {
  if (dark) document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
}, [dark]);


  const addTodo = (todo: Omit<Todo, "id" | "createdAt">) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      ...todo,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((s) =>
      s.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((s) => s.filter((t) => t.id !== id));
  };

  const filtered = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <main
      data-theme={dark ? "dark" : "light"}
      className={`min-h-screen transition-colors duration-500 ease-in-out
        flex items-start justify-center py-10 px-4
        ${
          dark
            ? "bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100"
            : "bg-gradient-to-b from-amber-50 via-orange-100 to-yellow-50 text-stone-800"
        }`}
    >
      <section
        className={`w-full max-w-2xl rounded-2xl shadow-lg p-6 md:p-8 relative transition-colors duration-500
        ${
          dark
            ? "bg-slate-800/80 border border-slate-700"
            : "bg-white/70 border border-amber-200 shadow-amber-200/20"
        }`}
      >
        <header className="flex justify-between items-center mb-4">
          <h1
            className={`text-2xl md:text-3xl font-semibold ${
              dark ? "text-slate-100" : "text-amber-800"
            }`}
          >
          Simple Todo App
          </h1>
          <ThemeToggle dark={dark} setDark={setDark} />
        </header>

        <TodoForm onAdd={addTodo} dark={dark} />

        <div className="mt-6">
          <TodoFilter filter={filter} setFilter={setFilter} dark={dark} />
        </div>

        <TodoList todos={filtered} onToggle={toggleTodo} onDelete={deleteTodo} dark={dark} />
        <footer
          className={`text-center text-xs mt-6 transition-colors duration-500 ${
            dark ? "text-slate-500" : "text-amber-600"
          }`}
        >
          {todos.length} total • {todos.filter((t) => !t.completed).length} active
        </footer>
      </section>
    </main>
  );
}
