import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :focus{
        outline: 0;
    }

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme.background};
    }

    body, textarea, input, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        
    }
    button{
        border: none;
        cursor: pointer;
    }
`
