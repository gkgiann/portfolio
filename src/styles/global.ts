import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(p) => p.theme.text};
    } */
    html {
        font-size: 62.5%;
    }
    body {
        background-color: ${(p) => p.theme.bg};
        color: ${(p) => p.theme.text}; 
    }
    body, input, textarea, button {
        font: 400 1.6rem Roboto, sans-serif;
    } 

    @media (max-width: 800px) {
        html {
            font-size: 46.875%;
        }
    }
`;
