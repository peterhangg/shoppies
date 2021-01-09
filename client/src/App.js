import React from "react";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Nominations from "./components/Nominations";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Search />
      <Movies />
      <Nominations />
    </div>
  );
}

export default App;
