import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
`;
const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  margin-bottom: 0rem;
  
  h2 {
    margin: 0;
  }
`;
const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const FlexItem = styled.div`
  order: ${(props) => props.order}
  flex: ${(props) => props.flex}
  flex-basics: ${(props) => props.flexBasis}
  flex-shrink: ${(props) => props.flexShrink}
  flex-grow: ${(props) => props.flexGrow}
  align-self: ${(props) => props.alignSelf}
`;
const Card = styled(FlexItem)`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 2rem;
  margin: 1rem 1rem;
  min-width: 18rem;
`;
const HeadLink = styled.a`
  font-weight: bold;
  display: block;
  text-decoration: none;
  padding-bottom: 1rem;
  color: black;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <h2>Neal Lubin</h2>
          <small>Software Engineer</small>
        </AppHeader>
        <FlexContainer>
          <Card>
            <HeadLink href="http://ctrlitall.com">Neal @ Stack Overflow</HeadLink>
            
            <p>
              <a href="https://stackoverflow.com/users/561731/neal">
                <img
                  src="https://stackoverflow.com/users/flair/561731.png?theme=clean"
                  width="208" height="58"
                  alt="profile for Neal at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                  title="profile for Neal at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                />
              </a>
            </p>
          </Card>
          <Card>
            <HeadLink href="/servable">servable</HeadLink>
    
            <p>A "simple" observable implementation</p>
          </Card>
        </FlexContainer>
      </AppWrapper>
    );
  }
}

export default App;
