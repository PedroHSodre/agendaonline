import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from 'react-toastify';

import MainRoute from "./routes";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainRoute />
      <ToastContainer         
        position="top-center"
        autoClose={2000}
        closeOnClick
        theme="dark"
      />
    </ThemeProvider>
  );
}

export default App;