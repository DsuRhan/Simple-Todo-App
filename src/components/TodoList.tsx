import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  dark: boolean;
}

export default function TodoList({ todos, onToggle, onDelete, dark }: Props) {
  if (todos.length === 0) {
    return (
      <div
        className={`py-6 text-center ${
          dark ? "text-slate-400" : "text-amber-600"
        }`}
      >
        No todos yet — add something.
      </div>
    );
  }

  return (
    <ul className="space-y-6 mt-8">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} dark={dark} />
        </li>
      ))}
    </ul>
  );
}
