import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  primaryColor: "#b69859", // GOLD
  primaryHoverColor: "#b69859", // GOLD
  darkGrey: "#3c3c3c", // DARK GRAY
  primaryColorTextHover: "#ffffff", // White
  backgroundColor: "#ffffff",
  black: "#000000",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
