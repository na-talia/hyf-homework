import React, { useState } from "react";
import TodoItem from "./TodoItem";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

const ToDoList = () => {
  const [todosState, setTodosState] = useState(todos);

  const addTodo = () => {
    let uniqueId = Math.random().toString(15).slice(2);

    const newTodo = {
      id: uniqueId,
      description: "random text",
    };

    setTodosState((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const deleteTodo = (id) => {
    setTodosState((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const todoItems =
    todosState.length !== 0
      ? todosState.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))
      : "No items...";
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      <ul style={{ listStyleType: "none" }}>{todoItems}</ul>
    </div>
  );
};

export default ToDoList;
