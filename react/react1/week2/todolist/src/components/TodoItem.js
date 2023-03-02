import React, { useState } from "react";

function TodoItem({ todo, deleteTodo }) {
  const [checkedTodo, setCheckedTodo] = useState(false);
  const todoIsChecked = (e) => {
    setCheckedTodo(e.target.checked);
  };

  return (
    <li>
      <label
        id={todo.id}
        style={{ textDecoration: checkedTodo ? "line-through" : "none" }}
      >
        {todo.description}
      </label>
      <input type="checkbox" onChange={todoIsChecked} checked={checkedTodo} />
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}
export default TodoItem;
