import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { defautTheme } from "./styles/default";
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from "react-router-dom";
import { Router } from './Router';
import { CycleContextProvider } from './context/CycleContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defautTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
)
