import React from "react";
import { ThemeProvider } from "styled-components";

import MainRoute from "./routes";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainRoute />
    </ThemeProvider>
  );
}

export default App;