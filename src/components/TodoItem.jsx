const priorityStyles = {
  low: "bg-slate-100 text-slate-600",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-rose-100 text-rose-700",
};

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 hover:border-slate-300 transition-colors">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
        className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
      />

      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-slate-400" : "text-slate-800"
        }`}
      >
        {todo.title}
      </span>

      <span
        className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${priorityStyles[todo.priority]}`}
      >
        {todo.priority}
      </span>

      <button
        onClick={() => onDelete(todo._id)}
        className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-600 transition-opacity px-2"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </li>
  );
}