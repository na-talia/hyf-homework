import React from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import "./App.css";

function App({ todos, setTodos }) {
  return (
    <div className="App">
      <Header title="Todo List" />
      <Timer />
      <TodoList />
    </div>
  );
}
export default App;
