import React from "react";
import Movies from "./components/Movies";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Search />
      <Movies />
    </div>
  );
}

export default App;
