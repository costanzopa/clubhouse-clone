import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --textColor: rgb(65, 64, 66);
    --btnBgColor: #3287b7;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1em;
    font-family: 'Neutrif Pro';
  }

`;
