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
      border-bottom: 3px solid #2a7ae2; /* This creates the border. Replace black with whatever color you want. */
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
  * {
    box-sizing: content-box;
  }
  font-family: "Work Sans", sans-serif;
`;
const PageInner = styled(FlexContainer)`
  max-width: 750px;
  margin: 36px auto;

  @media only screen and (max-width: 600px) {
    max-width: 90vw;
  }
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
  margin: 1.75rem 1rem;
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

const CardSmallHeader = styled.h3`
  font-weight: 500;
`;

const TypeLogo = styled.i`
  font-size: 48px;
  width: 48px;
  height: 48px;
  color: #2a7ae2;
`;

const TypeLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4px;
  padding: 8px;
  font-size: 12px;

  ${TypeLogo} {
    margin: 0 auto 12px;
  }
`;

const Form = styled.form`
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
  }

  textarea {
    min-height: 44px;
  }

  button {
    background-color: #2a7ae2;
    color: white;
    width: 150px;
    margin-bottom: 0;
  }
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
              <CardHeader>Where I can be found</CardHeader>
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
                the frontend.
              </div>
            </Card>
            <Card flexBasis="100vw">
              <CardHeader> Technical Skills </CardHeader>

              <div>
                <CardSmallHeader>Languages </CardSmallHeader>

                {/* TODO Put names under all logos (and download the images (svgs) for use on site in the future */}
                <FlexContainer>
                  <TypeLogoContainer>
                    <TypeLogo className="devicon-javascript-plain" />
                    JavaScript
                  </TypeLogoContainer>
                  <TypeLogoContainer>
                    <TypeLogo className="devicon-nodejs-plain" />
                    NodeJS
                  </TypeLogoContainer>
                  <TypeLogoContainer>
                    <TypeLogo className="devicon-typescript-plain" />
                    TypeScript
                  </TypeLogoContainer>
                  <TypeLogoContainer>
                    <TypeLogo className="devicon-html5-plain" />
                    HTML
                  </TypeLogoContainer>
                  <TypeLogoContainer>
                    <TypeLogo className="devicon-css3-plain" />
                    CSS
                  </TypeLogoContainer>
                  <TypeLogoContainer>
                    <TypeLogo className="devicon-mysql-plain" />
                    MySQL
                  </TypeLogoContainer>
                  <TypeLogoContainer>
                    <TypeLogo className="devicon-ruby-plain" />
                    Ruby
                  </TypeLogoContainer>
                  <TypeLogoContainer>
                    <TypeLogo className="devicon-php-plain" />
                    PHP
                  </TypeLogoContainer>
                  <TypeLogoContainer>
                    <TypeLogo className="devicon-python-plain" />
                    Python
                  </TypeLogoContainer>
                </FlexContainer>
              </div>
              <br />
              <div>
                <CardSmallHeader> Libraries </CardSmallHeader>
                React, Redux, Backbone, Marionette, Angular, Handlebars,
                Flow-typed, Express, Django, Symfony, Rails
              </div>
            </Card>
            <Card flexBasis="100vw">
              <CardHeader>Projects</CardHeader>
              <CardList>
                <li>
                  <HeaderLink href="https://github.com/maniator/servable">
                    servable - a simple observable
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink href="https://github.com/maniator/praetbot">
                    praetbot - a slackbot built in node
                  </HeaderLink>
                </li>
              </CardList>
            </Card>
            <Card flexBasis="100vw">
              <CardHeader>Get in touch</CardHeader>
              <Form
                method="POST"
                action="https://formspree.io/naftali@lubin.dev"
              >
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" />
                <button type="submit">Send</button>
              </Form>
            </Card>
          </FlexContainer>
        </PageInner>
      </Page>
    );
  }
}

export default App;
