import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all 0.2s linear;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.primaryTextColor};
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;