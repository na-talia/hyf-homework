import React from "react";
import Header from "./components/Header";
import RenderUser from "./components/UserContext";
import SearchUser from "./components/SearchUser";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header title="Github user searcher" />
      <RenderUser>
        <SearchUser />
      </RenderUser>
    </div>
  );
};

export default App;
