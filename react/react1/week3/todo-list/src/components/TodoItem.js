import React, { useState } from "react";
import Border from "./Border";

const TodoItem = (props) => {
  const { id, todo, deleteItem } = props;

  const [checked, setChecked] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(
    todo.description
  );

  const isDone = () =>
    setChecked((currValue) => {
      return !currValue;
    });

  const editButton = () => {
    if (editItem) {
      props.updateDescription(id, updatedDescription);
    }
    setEditItem((currValue) => !currValue);
  };

  const editOrUpdate = editItem ? "Update" : "Edit";

  const isChanged = editItem ? (
    <input
      type="text"
      onChange={(e) => setUpdatedDescription(e.target.value)}
      value={updatedDescription}
    ></input>
  ) : (
    <span
      style={{
        textDecoration: checked ? "line-through" : "none",
      }}
    >
      {todo.description} | {todo.deadline}
    </span>
  );

  return (
    <Border>
      <li>
        {isChanged}
        <input type="checkbox" onChange={isDone} checked={checked} />
        <button onClick={() => deleteItem(id)}>Delete</button>
        <button onClick={editButton}>{editOrUpdate}</button>
      </li>
    </Border>
  );
};

export default TodoItem;
