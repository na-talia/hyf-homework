import React from "react";

const TodoItem = ({ item }) => {
  return (
    <p>
      {item.description} - {item.deadline}
    </p>
  );
};
export default TodoItem;
