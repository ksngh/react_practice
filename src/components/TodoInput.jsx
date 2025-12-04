import { useState } from "react";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    onAdd(input, date, time);
    setInput("");
    setDate("");
    setTime("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="todo-input-container">
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="할 일을 입력하세요"
        />
      </div>
      <div className="todo-datetime">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="date-input"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="time-input"
        />
        <button onClick={handleAdd}>추가</button>
      </div>
    </div>
  );
}

export default TodoInput;
