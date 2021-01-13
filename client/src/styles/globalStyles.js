import { createGlobalStyle } from "styled-components";
import { colors } from "../styles/index";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
    color: ${colors.darkGrey};
  }
`;

export default GlobalStyle;