import React from "react";
import SearchForm from "./components/SearchForm";
import Movies from "./components/Movies";
import Nominations from "./components/Nominations";
import Header from "./components/Header";
import { HomePageWrapper, MainWrapper } from "./styles";

const App = () => {
  return (
    <HomePageWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b69859"
          fill-opacity="1"
          d="M0,0L80,21.3C160,43,320,85,480,122.7C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <Header />
      <SearchForm />
      <MainWrapper>
        <Movies />
        <Nominations />
      </MainWrapper>
    </HomePageWrapper>
  );
};

export default App;
