import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    .App {
        min-height: 100vh;
    }
`;

export default GlobalStyle;