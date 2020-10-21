import React from 'react';
import './App.css';
import ArticleList from './components/articleList';
import Header from './components/header';
import NavBar from './components/navBar';
import { Router } from '@reach/router';
import axios from 'axios';

class App extends React.Component {

  state = {
    topics: [{ slug: '', description: 'Everything on anything!' }],

  }

  componentDidMount() {
    axios.get('https://aph88-nc-news.herokuapp.com/api/topics').then(({ data: { topics } }) => {
      topics.unshift({ slug: '', description: 'Everything on anything!' })
      this.setState({
        topics: topics
      })
    })
  }



  render() {
    return (
      <div className="App">
        <Header />

        <NavBar topics={this.state.topics} />
        <Router>
          <ArticleList path='/' />
          <ArticleList path='/articles/*' />
        </Router>

      </div>
    );
  }
}

export default App;
