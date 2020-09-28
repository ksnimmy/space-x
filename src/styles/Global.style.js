import { createGlobalStyle, } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    margin : 0;
    padding : 0;
    box-sizing: content-box;
    font-family: Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background: #fff;
  }
  &  *{
        clear: both;
        margin : 0;
        padding : 0;
    }
`;