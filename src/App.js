import React from 'react';
import './App.css';
import Container from './components/container';
import Menu from './components/navbar';
import Toolbar from './components/toolbar';
function App() {
  return (
    <div>
      <Menu></Menu>
      <Toolbar></Toolbar>
      <Container></Container>
    </div>
  );
}

export default App;
