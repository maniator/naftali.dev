import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const fontSize = 16;

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  body {
    font-size: ${fontSize}px;
    font-family: "Work Sans", sans-serif;
  }
  
  h1 {
    font-size: ${fontSize * 1.75}px;
  }
  
  h2 {
    font-size: ${fontSize * 1.5}px;
  }
  
  h3 {
    font-size: ${fontSize * 1.25}px;
  }

  h4 {
    font-size: ${fontSize}px;
  }
  
  h5 {
    font-size: ${fontSize * 0.75}px;
  }

  .paragraph {
    margin: ${fontSize}px 0;
  }
`;

export default GlobalStyles;
