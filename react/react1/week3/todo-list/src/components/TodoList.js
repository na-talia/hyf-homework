import React, { useState, useEffect, useCallback } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const API_URL =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  // Fetch our todos
  const fetchTodos = useCallback(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  // Add a new Todo

  const addTodo = () => {
    let uniqueId = Math.random().toString(15).slice(2);

    const newTodo = {
      id: uniqueId,
      description,
      deadline,
    };

    if (!description) {
      alert("Please provide a description");
    } else if (!deadline) {
      alert("Please provide a deadline");
    } else {
      setTodos([...todos, newTodo]);
    }

    setDescription("");
    setDeadline("");
  };

  //  Delete a Todo

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  // Update a Todo

  const updateTodo = (id, description) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, description };
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  const todoItems =
    todos.length !== 0 ? (
      todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          id={todo.id}
          deleteItem={deleteTodo}
          updateDescription={updateTodo}
        />
      ))
    ) : (
      <h3>No items...</h3>
    );

  return (
    <main className="main">
      <div>
        <label>Todo Description: </label>
        <input
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>

      <div>
        <label>Deadline: </label>
        <input
          type="date"
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
          deadline={deadline}
        />

        <button onClick={addTodo}>Add todo</button>
        {todoItems}
      </div>
    </main>
  );
};

export default TodoList;
