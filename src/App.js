import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import headerImage from "./images/header.png";

const AppHeader = styled.div`
  position: relative;
  background-color: ${props => props.backgroundColor};
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
    font-family: "Work Sans", sans-serif;
    font-weight: 900;
    font-style: normal;
    margin: 0;
    letter-spacing: 3px;
    filter: none;

    &:after {
      content: ""; /* This is necessary for the pseudo element to work. */
      display: block; /* This will put the pseudo element on its own line. */
      margin: 0 auto; /* This will center the border. */
      width: 25%; /* Change this to whatever width you want. */
      padding-top: 1rem; /* This creates some space between the element and the border. */
      border-bottom: 3px solid rgba(79, 255, 150, 0.34); /* This creates the border. Replace black with whatever color you want. */
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
`;

const HeaderLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  display: block;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  flex-wrap: wrap;
  justify-content: center;
  flex: ${({ flex }) => flex};
  min-height: ${({ height }) => height};
`;
const Page = styled(FlexContainer)`
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
  border: 1px solid grey;
  border-radius: 5px;
  padding: 2rem;
  margin: 1rem 1rem;
  text-align: center;
  min-width: ${({ minWidth = 18 }) => `${minWidth}rem`};
  opacity: 1;
  animation: ${fadeIn} 2s;
`;
const CardHeaderLink = styled(HeaderLink)`
  padding-bottom: 1rem;
  color: black;
`;
const CardList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  flex-direction: column;

  li {
    margin: auto;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader>
          <h2>Naftali Lubin</h2>
          <small>Full stack Software Engineer</small>
          <div className="after" />
        </AppHeader>
        <Page flexDirection="column" height="100vh">
          <FlexContainer>
            <Card flexBasis="100vw">
              <h2>Where I can be found:</h2>
              <CardList>
                <li>
                  <CardHeaderLink href="http://ctrlitall.com">
                    Neal on Stack Overflow
                  </CardHeaderLink>
                </li>
                <li>
                  <CardHeaderLink href="https://github.com/maniator">
                    @maniator on github
                  </CardHeaderLink>
                </li>
                <li>
                  <CardHeaderLink href="https://www.linkedin.com/in/neallubin/">
                    Naftali Lubin on LinkedIn
                  </CardHeaderLink>
                </li>
              </CardList>
            </Card>
          </FlexContainer>

          <FlexContainer>
            <Card flexBasis="100vw">
              <h2> What do I do? </h2>
              <div>
                {" "}
                I help to build scalable full stack applications with a focus on
                the frontend.{" "}
              </div>

              <h3>Technical Skills</h3>
              <div>
                <h4>Languages </h4>
                JavaScript, TypeScript, PHP, MySQL, HTML, CSS, Python, Ruby
              </div>
              <div>
                <h4>Libraries </h4>
                React, redux, Backbone, Marionette, Angular, Handlebars,
                flow-typed,lodash, express, NodeJS, django, Symfony, Rails
              </div>
            </Card>
          </FlexContainer>
        </Page>
      </div>
    );
  }
}

export default App;
