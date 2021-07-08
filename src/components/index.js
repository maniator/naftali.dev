import styled, { keyframes } from "styled-components";
import headerImage from "../images/header.png";


const blue = "#3f6596";

export const AppHeader = styled.div`
  position: relative;
  color: #fff;
  margin-bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  height: 50vh;
  width: 100%;
  justify-content: center;

  h2 {
    font-size: 3rem;
    line-height: 3rem;
    height: 3rem;
    max-width: 80vw;
    font-weight: 900;
    font-style: normal;
    margin: 0 auto;
    letter-spacing: 3px;
    filter: none;

    &:after {
      content: ""; /* This is necessary for the pseudo element to work. */
      display: block; /* This will put the pseudo element on its own line. */
      margin: 0 auto; /* This will center the border. */
      width: 200px; /* Change this to whatever width you want. */
      padding-top: 1rem; /* This creates some space between the element and the border. */
      border-bottom: 3px solid ${blue}; /* This creates the border. Replace black with whatever color you want. */
    }
  }
  small {
    font-size: 1.1rem;
    letter-spacing: 2px;
    max-width: 80vw;
    margin: 2.5rem auto 0;
  }

  .after {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    filter: blur(2px);
    background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55)),
      url(${headerImage});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 2rem;
      line-height: 2rem;
      height: 2rem;
    }
  }
`;

export const Link = styled.a.attrs({
  target: "blank"
})`
  display: block;
  padding-bottom: 1rem;
  text-decoration: none;
  color: ${blue};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  flex-wrap: wrap;
  flex: ${({ flex }) => flex};
  min-height: ${({ height }) => height};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: 0 3rem;

  @media only screen and (max-width: 600px) {
    margin: 0 1rem;
  }
`;

export const Page = styled.div`
  font-family: "Work Sans", sans-serif;
  width: 100vw;

  * {
    box-sizing: content-box;
  }
`;

export const FlexItem = styled.div`
  order: ${props => props.order};
  flex: ${props => props.flex};
  flex-basis: ${props => props.flexBasis};
  flex-shrink: ${props => props.flexShrink};
  flex-grow: ${props => props.flexGrow};
  align-self: ${props => props.alignSelf};
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;
export const Card = styled(FlexItem)`
  border-radius: 5px;
  margin: 1.75rem 1rem;
  text-align: center;
  min-width: ${({ minWidth = 18 }) => `${minWidth}rem`};
  opacity: 1;
  animation: ${fadeIn} 2s;
`;

export const CardList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  flex-direction: ${props => props.flexDirection || "row"};
  margin-bottom: 0;

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    li {
      padding: 1rem;
    }

    li:last-child {
      padding-bottom: 0;
    }
  }

  ${props =>
    props.flexDirection === "column" &&
    `
    li {
      padding: 1rem;
    }

    li:last-child {
      padding-bottom: 0;
    }
  `}

  li {
    margin: auto;
    display: flex;
    align-items: center;

    & > * {
      padding: 0;
      max-width: 100%;
    }
  }
`;

export const CardHeader = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 1rem;

  &:after {
    content: ""; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: ${props =>
      props.lineWidth || "150px"}; /* Change this to whatever width you want. */
    padding-top: 0.5rem; /* This creates some space between the element and the border. */
    border-bottom: 3px solid #9d9fa2; /* This creates the border. Replace black with whatever color you want. */
  }
`;

export const CardSmallHeader = styled.h3`
  font-weight: 500;
`;

export const TypeLogo = styled.i`
  font-size: 48px;
  width: 48px;
  height: 48px;
  color: ${blue};
`;

export const TypeLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4px;
  padding: 8px;
  font-size: 12px;

  ${TypeLogo} {
    margin: 0 auto 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  input,
  textarea,
  button {
    display: block;
    width: 300px;
    margin: 0 auto 8px;
    border: 1px solid #9d9fa2;
    height: 24px;
    padding: 8px 16px;
    font-size: 16px;
    font: inherit;
  }

  textarea {
    min-height: 44px;
  }

  button {
    background-color: ${blue};
    color: white;
    width: 150px;
    margin-bottom: 0;
  }
`;
