import React from 'react';
import './App.css';
import Container from './components/container';
import Menu from './components/navbar';
import Toolbar from './components/toolbar';
import ArticleForm from "./components/article-form";
function App() {
  return (
    <div>
      <Menu></Menu>
      <Toolbar></Toolbar>
      <ArticleForm></ArticleForm>
      <Container></Container>
    </div>
  );
}

export default App;
