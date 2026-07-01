import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "./api/todoApi.js";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTodos = async () => {
    try {
      const res = await fetchTodos();
      setTodos(res.data);
    } catch (err) {
      setError("Could not reach the server. Is the backend running on :5000?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (todo) => {
    const res = await createTodo(todo);   // 👈 addTodo → createTodo (match import name)
    setTodos((prev) => [res.data, ...prev]);
  };

  const handleToggle = async (todo) => {
    const res = await updateTodo(todo._id, { completed: !todo.completed });
    setTodos((prev) => prev.map((t) => (t._id === todo._id ? res.data : t)));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t._id !== id));
  };

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Todo</h1>
        <p className="text-slate-500 mb-6">
          {loading
            ? "Loading..."
            : `${remaining} task${remaining === 1 ? "" : "s"} remaining`}
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 text-sm">
            {error}
          </div>
        )}

        <TodoForm onAddTodo={handleAdd} />

        {!loading && (
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}