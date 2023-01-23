import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  html {
    font-family: 'Poppins', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
`;
