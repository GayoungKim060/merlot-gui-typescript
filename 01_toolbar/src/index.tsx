import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme, mixins } from './styles/theme';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/styled-engine';
/*  Initial code
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
*/
// ERROR Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Container'. Type 'null' is not assignable to type 'Container'.
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
root.render(
  /*  Initial code
  <React.StrictMode>
    <App />
  </React.StrictMode>
  */
  <StyledEngineProvider injectFirst>
    <GlobalStyle />
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <Router />
    </ThemeProvider>
  </StyledEngineProvider>
);

// 이제 theme.ts 파일에서 정의한 테마를 기반으로 애플리케이션 전체에 일관된 스타일을 적용할 수 있습니다. 
// 각 컴포넌트에서 props.theme를 통해 테마에 접근할 수 있습니다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// MUST This file is the Javascript entry point