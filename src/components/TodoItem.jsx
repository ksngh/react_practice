function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <span
        className={todo.done ? "done" : ""}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
