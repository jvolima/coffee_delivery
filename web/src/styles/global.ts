import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #FAFAFA;
    --white: #FFFFFF;
    --base-title: #272221;
    --base-subtitle: #403937;
    --base-text: #574F4D;
    --base-label: #8D8686;
    --base-hover: #D7D5D5;
    --base-button: #E6E5E5;
    --base-input: #EDEDED;
    --base-card: #F3F2F2;
    --yellow-dark: #C47F17;
    --yellow: #DBAC2C;
    --yellow-light: #F1E9C9;
    --purple-dark: #4B2995;
    --purple: #8047F8;
    --purple-light: #EBE5F9;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
  }

  body, button, input, select, textarea {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;