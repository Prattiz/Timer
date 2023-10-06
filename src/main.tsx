import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { defautTheme } from "./styles/default";
import { GlobalStyle } from './styles/global';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defautTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
)
