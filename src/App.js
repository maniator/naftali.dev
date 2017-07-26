import React, { Component } from 'react';
import styled from 'styled-components';

const AppHeader = styled.div`
  background-color: ${(props) => props.backgroundColor};
  height: 12rempx;
  padding: 20px;
  color: ${(props) => props.fontColor};
  margin-bottom: 0rem;
  
  h2 {
    margin: 0;
    font-size: 3rem;
  }
  
  small {
    font-size: 1rem;
  }
`;
const HeaderLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  display: block;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({flexDirection = 'row'}) => flexDirection};
  flex-wrap: wrap;
  justify-content: center;
  flex: ${({flex}) => flex};
  min-height: ${({height}) => height};
`;
const FlexItem = styled.div`
  order: ${(props) => props.order};
  flex: ${(props) => props.flex};
  flex-basis: ${(props) => props.flexBasis};
  flex-shrink: ${(props) => props.flexShrink};
  flex-grow: ${(props) => props.flexGrow};
  align-self: ${(props) => props.alignSelf};
`;
const Card = styled(FlexItem)`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 2rem;
  margin: 1rem 1rem;
  text-align: center;
  min-width: ${({minWidth = 18}) => `${minWidth}rem`};
`;
const CardLink = styled(HeaderLink)`
  padding-bottom: 1rem;
  color: black;
`;
const CardList = styled.ul`
  list-style: none;
  display: flex;
  
  li {
    margin: auto;
  }
`;

class App extends Component {
  render() {
    return (
      <FlexContainer flexDirection="column" height="100vh">
        <AppHeader>
          <h2>Neal Lubin</h2>
          <small>Consider it dealt with</small>
        </AppHeader>
        <FlexContainer flex="1">
          <Card>
            <CardLink href="http://ctrlitall.com">Neal on Stack Overflow</CardLink>
            
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
            <CardLink href="/servable">servable</CardLink>
    
            <p>A "simple" observable implementation</p>
          </Card>
        </FlexContainer>

        <FlexContainer>
          <Card flexBasis="100vw">
            <h3>Where I can be found:</h3>
            <CardList>
              <li><CardLink href="http://ctrlitall.com">Neal on Stack Overflow</CardLink></li>
              <li><CardLink href="https://github.com/maniator">@maniator on github</CardLink></li>
              <li><CardLink href="https://twitter.com/maniator">@maniator on twitter</CardLink></li>
              <li><CardLink href="https://www.linkedin.com/in/neallubin/">Neal Lubin on LinkedIn</CardLink></li>
            </CardList>
          </Card>
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default App;
