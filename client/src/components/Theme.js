import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../styles/theme";

const Theme = ({ children, useDarkTheme }) => (
  <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>{children}</ThemeProvider>
);

export default Theme;
