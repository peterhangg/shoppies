import React from "react";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Nominations from "./components/Nominations";
import { HomePageWrapper, MainWrapper } from "./styles";

const App = () => {
  return (
    <HomePageWrapper>
      <Search />
      <MainWrapper>
        <Movies />
        <Nominations />
      </MainWrapper>
    </HomePageWrapper>
  );
}

export default App;
