function TodoItem({ todo, onToggle, onDelete }) {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("ko-KR", {
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "";
    return timeStr;
  };

  return (
    <li className="todo-item">
      <div className="todo-content" onClick={() => onToggle(todo.id)}>
        <span className={`todo-text ${todo.done ? "done" : ""}`}>
          {todo.done ? "✓ " : "○ "}{todo.text}
        </span>
        {(todo.date || todo.time) && (
          <span className="todo-datetime-display">
            {todo.date && <span className="date-badge">📅 {formatDate(todo.date)}</span>}
            {todo.time && <span className="time-badge">🕐 {formatTime(todo.time)}</span>}
          </span>
        )}
      </div>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
