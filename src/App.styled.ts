import styled, { createGlobalStyle } from 'styled-components';

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

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export default AppContainer;
