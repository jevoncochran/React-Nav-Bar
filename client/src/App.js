import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Logo = styled.div`
  font-size: 1.5em;
`
const ControlButton = styled.div`
`
const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  padding: 40px;
`

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Logo>
          CryptoDash
        </Logo>
        <div></div>
        <ControlButton>
          Dashboard
        </ControlButton>
        <ControlButton>
          Settings
        </ControlButton>
      </AppLayout>
    );
  }
}

export default App;
