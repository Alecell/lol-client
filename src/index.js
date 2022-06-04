import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import { theme } from './config/theme';
import { GlobalStyles } from './styles';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
