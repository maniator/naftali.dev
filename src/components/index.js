import styled, { keyframes, css } from "styled-components";
import { BgImage } from "gbimage-bridge";
import { Link as GLink } from "gatsby";

export const blue = "#3f6596";
export const grey = "#9d9fa2";
const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

export const HeaderNavLink = styled(GLink)`
  font-size: 3rem;
  line-height: 3rem;
  min-height: 3rem;
  max-width: 80vw;
  font-weight: 900;
  font-style: normal;
  margin: 0 auto;
  letter-spacing: 3px;
  filter: none;
  color: #fff;
  text-decoration: none;
  display: block;

  &:after {
    content: ""; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 200px; /* Change this to whatever width you want. */
    padding-top: 1rem; /* This creates some space between the element and the border. */
    border-bottom: 3px solid ${blue}; /* This creates the border. Replace black with whatever color you want. */
  }
`;

export const AppHeader = styled(BgImage)`
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
  grid-area: pageHeader;

  small {
    font-size: 1.1rem;
    letter-spacing: 2px;
    max-width: 80vw;
    margin: 2.5rem auto 0;
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
  target: "blank",
})`
  display: block;
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom || "1rem"};
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
  max-width: 100vw;
  display: grid;

  grid-template-areas:
    "pageHeader"
    "pageContent"
    "pageFooter";
`;

export const Main = styled.main`
  position: relative;
  grid-area: pageContent;
`;

export const FlexItem = styled.div`
  order: ${(props) => props.order};
  flex: ${(props) => props.flex};
  flex-basis: ${(props) => props.flexBasis};
  flex-shrink: ${(props) => props.flexShrink};
  flex-grow: ${(props) => props.flexGrow};
  align-self: ${(props) => props.alignSelf};
`;

export const CardHeader = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 1rem;
  display: block;
  color: black;
  text-decoration: none;

  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: ${({ lineWidth }) => lineWidth || "150px"};
    padding-top: 0.5rem;
    border-bottom: 3px solid ${grey};
  }
`;
export const Card = styled(FlexItem)`
  border-radius: 5px;
  margin: 1.75rem 1rem;
  ${({ centered = true }) => centered && `text-align: center;`}
  min-width: ${({ minWidth = 18 }) => `${minWidth}rem`};
  opacity: 1;
  animation: ${fadeIn} 2s;

  ${({ centered = true }) =>
    !centered &&
    css`
      ${CardHeader}:after {
        margin: 0;
      }
    `}
`;

export const CardListItem = styled.li`
  margin: auto;
  display: flex;
  align-items: center;

  & > * {
    padding: 0;
    max-width: 100%;
  }
`;

export const CardList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  flex-direction: ${(props) => props.flexDirection || "row"};
  margin-bottom: 0;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    ${CardListItem} {
      padding: 1rem;
    }

    ${CardListItem}:last-child {
      padding-bottom: 0;
    }
  }

  ${(props) =>
    props.flexDirection === "column" &&
    css`
      ${CardListItem} {
        padding: 1rem;
      }

      ${CardListItem}:last-child {
        padding-bottom: 0;
      }
    `}
`;

export const CardSmallHeader = styled.h3`
  font-weight: 500;
  margin: 1rem 0;
`;

export const SmallHeader = styled.small`
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
  position: relative;
  width: 100%;

  input,
  textarea,
  button {
    display: block;
    width: 265px;
    max-width: 100%;
    margin: 0 auto 8px;
    border: 1px solid ${grey};
    padding: 8px 16px;
    font-family: inherit;
  }

  textarea {
    min-height: 44px;
  }

  button {
    background-color: ${blue};
    color: white;
    width: 150px;
    max-width: 100%;
    margin-bottom: 0;
  }
`;

export const Footer = styled(Card).attrs({
  as: "footer",
  flexBasis: "100vw",
})`
  grid-area: pageFooter;
  margin: 0 20px 20px;

  &:before {
    content: "";
    display: block;
    width: 90vw;
    margin: 1rem auto 2rem;
    border-bottom: 3px solid ${grey};
  }
`;
