import React from 'react';
import './App.css';
import ArticleList from './components/articleList';
import Header from './components/header';
import NavBar from './components/navBar';
import { Router } from '@reach/router'

class App extends React.Component {

  state = {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <ArticleList />

      </div>
    );
  }
}

export default App;
