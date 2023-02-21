import React from "react";

const TodoItem = ({ description, deadline }) => {
  return (
    <p>
      {description} - {deadline}
    </p>
  );
};
export default TodoItem;
