import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap");

  * {
    &,
    &:before,
    &:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "IBM Plex Sans", sans-serif;
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
  }

  #root {
    width: 100%;
    max-width: 460px;
    height: 789px;
  }
`;
