import { createGlobalStyle } from "styled-components";
import { BREAKPOINTS } from "../constants";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FFF;
    font-family: 'Princess Sofia', cursive;
    font-size: 16px;
    padding: 0;
    box-sizing: border-box;
    max-width: ${BREAKPOINTS.desktop}px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
