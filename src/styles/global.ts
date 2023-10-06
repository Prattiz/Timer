import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    :focus{
        outline: 0;
    }

    body{
        background-color: ${props => props.theme["gray-900"]};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        color: ${props => props.theme["gray-300"]};
        -webkit-font-smoothing: antialiased;
    }

    a, button {
        cursor: pointer;
        border: none;
    }
`