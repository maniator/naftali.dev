import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import headerImage from "./images/header.png";

const AppHeader = styled.div`
  position: relative;
  color: #fff;
  margin-bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  height: 100vh;
  display: flex;
  justify-content: center;

  h2 {
    font-size: 3rem;
    line-height: 3rem;
    height: 3rem;
    width: auto;
    font-weight: 900;
    font-style: normal;
    margin: 0;
    letter-spacing: 3px;
    filter: none;

    &:after {
      content: ""; /* This is necessary for the pseudo element to work. */
      display: block; /* This will put the pseudo element on its own line. */
      margin: 0 auto; /* This will center the border. */
      width: 20%; /* Change this to whatever width you want. */
      padding-top: 1rem; /* This creates some space between the element and the border. */
      border-bottom: 3px solid #2a7ae2; /* This creates the border. Replace black with whatever color you want. */
    }
  }
  small {
    font-size: 1.1rem;
    letter-spacing: 2px;
    margin-top: 2.5rem;
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

const HeaderLink = styled.a`
  display: block;
  padding-bottom: 1rem;
  text-decoration: none;
  color: #2a7ae2;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  flex-wrap: wrap;
  justify-content: center;
  flex: ${({ flex }) => flex};
  min-height: ${({ height }) => height};
`;
const Page = styled.div`
  font-family: "Work Sans", sans-serif;
`;
const PageInner = styled(FlexContainer)`
  width: 80vw;
  margin: 0 auto;
`;
const FlexItem = styled.div`
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
const Card = styled(FlexItem)`
  border-radius: 5px;
  margin: 1rem 1rem;
  text-align: center;
  min-width: ${({ minWidth = 18 }) => `${minWidth}rem`};
  opacity: 1;
  animation: ${fadeIn} 2s;
`;

const CardList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  flex-direction: column;
  margin-bottom: 0;

  li {
    margin: auto;
    &:last-child {
      a {
        padding: 0;
      }
    }
  }
`;
const CardHeader = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 20px;

  &:after {
    content: ""; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: ${props =>
      props.lineWidth || "6vw"}; /* Change this to whatever width you want. */
    padding-top: 0.5rem; /* This creates some space between the element and the border. */
    border-bottom: 3px solid #9d9fa2; /* This creates the border. Replace black with whatever color you want. */
  }
`;

const CardSmallHeader = styled.h3`
  font-weight: 500;
`;

const TypeLogo = styled.i`
  font-size: 48px;
  width: 48px;
  height: 48px;
  padding: 8px;
  color: #2a7ae2;
  margin: 0 4px;
`;

class App extends Component {
  render() {
    return (
      <Page>
        <AppHeader>
          <h2>Naftali Lubin</h2>
          <small>Full stack Software Engineer</small>
          <div className="after" />
        </AppHeader>
        <PageInner flexDirection="column" height="100vh">
          <FlexContainer>
            <Card flexBasis="100vw">
              <CardHeader lineWidth="15vw">Where I can be found</CardHeader>
              <CardList>
                <li>
                  <HeaderLink href="https://github.com/maniator">
                    @maniator on Github
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink href="http://ctrlitall.com">
                    Neal on Stack Overflow
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink href="https://www.linkedin.com/in/neallubin/">
                    Naftali Lubin on LinkedIn
                  </HeaderLink>
                </li>
              </CardList>
            </Card>
            <Card flexBasis="100vw">
              <CardHeader> What I do </CardHeader>

              <div>
                I help to build scalable full stack applications with a focus on
                the frontend.{" "}
              </div>
            </Card>
            <Card flexBasis="100vw">
              <CardHeader lineWidth="13vw"> Technical Skills </CardHeader>

              <div>
                <CardSmallHeader>Languages </CardSmallHeader>

                {/* TODO Put names under all logos (and download the images (svgs) for use on site in the future */}
                <FlexContainer>
                  <TypeLogo className="devicon-nodejs-plain" />
                  <TypeLogo className="devicon-typescript-plain" />
                  <TypeLogo className="devicon-php-plain" />
                  <TypeLogo className="devicon-html5-plain" />
                  <TypeLogo className="devicon-mysql-plain" />
                  <TypeLogo className="devicon-css3-plain" />
                  <TypeLogo className="devicon-python-plain" />
                  <TypeLogo className="devicon-ruby-plain" />
                </FlexContainer>
              </div>
              <br />
              <div>
                <CardSmallHeader> Libraries </CardSmallHeader>
                React, redux, Backbone, Marionette, Angular, Handlebars,
                flow-typed, lodash, express, NodeJS, django, Symfony, Rails
              </div>
            </Card>
          </FlexContainer>
        </PageInner>
      </Page>
    );
  }
}

export default App;
