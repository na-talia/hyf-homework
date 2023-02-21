import "./App.css";
import TodoHeader from "./components/TodoHeader.js";
import TodoList from "./components/TodoList.js";

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <TodoList />
    </div>
  );
}

export default App;
