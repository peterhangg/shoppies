import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import { HomePageContainer } from "./styles";
import Modal from "./components/Modal";
import MovieContainer from "./components/MovieContainer";
import Toast from "./components/Toast";
import Theme from "./components/Theme";
import GlobalStyle from "./styles/globalStyles";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMovieContainer, setShowMovieContainer] = useState(false);
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <Theme useDarkTheme={useDarkTheme}>
      <GlobalStyle />
      <HomePageContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#b69859"
            fillOpacity="1"
            d="M0,0L80,21.3C160,43,320,85,480,122.7C640,160,800,192,960,192C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <Toast />
        <Header setUseDarkTheme={setUseDarkTheme} useDarkTheme={useDarkTheme} />
        <SearchForm
          showMovieContainer={showMovieContainer}
          setShowMovieContainer={setShowMovieContainer}
        />
        <MovieContainer
          setShowModal={setShowModal}
          showMovieContainer={showMovieContainer}
        />
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          setShowMovieContainer={setShowMovieContainer}
        />
      </HomePageContainer>
    </Theme>
  );
};

export default App;
