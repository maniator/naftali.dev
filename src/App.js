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

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <h2>Neal Lubin</h2>
          <small>Software Engineer</small>
        </AppHeader>
      </AppWrapper>
    );
  }
}

export default App;
