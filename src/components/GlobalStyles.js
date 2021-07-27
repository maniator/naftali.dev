import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const fontSize = 16;

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  body {
    font-size: ${fontSize}px;
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

  .paragraph {
    margin: ${fontSize}px 0;
  }
`;

export default GlobalStyles;
