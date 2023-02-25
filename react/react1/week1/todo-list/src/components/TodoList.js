import React from "react";
import TodoItem from "./TodoItem";

const ourTodos = [
  { id: 1, description: "Get out of bed", deadline: "Wed Sep 13 2017" },
  { id: 2, description: "Brush teeth", deadline: "Thu Sep 14 2017" },
  { id: 3, description: "Eat breakfast", deadline: "Fri Sep 15 2017" },
];

const todoList = () => {
  return (
    <div>
      {ourTodos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default todoList;
