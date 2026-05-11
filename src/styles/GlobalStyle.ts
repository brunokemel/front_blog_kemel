import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    background: #fff8ef;
    color: #2d1f14;
    font-family: Georgia, 'Times New Roman', serif;
  }

  button, input, textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }
`
