import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import ThemeConfig from "./ThemeConfig";
import ThemeGlobalStyle from "./ThemeGlobalStyle";

function Theme({ children }) {
  const { themeMode } = useSelector((state) => state.ui);

  return (
    <ThemeProvider theme={ThemeConfig(themeMode)}>
      <ThemeGlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
