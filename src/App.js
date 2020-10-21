import React from 'react';
import './App.css';
import ArticleList from './components/articleList';
import Header from './components/header';
import NavBar from './components/navBar';
import { Router } from '@reach/router';
import axios from 'axios';
import Article from './components/article'

class App extends React.Component {

  state = {
    topics: [{ slug: '', description: 'Everything on anything!' }],
    params: {}
  }

  componentDidMount() {
    axios.get('https://aph88-nc-news.herokuapp.com/api/topics').then(({ data: { topics } }) => {
      topics.unshift({ slug: '', description: 'Everything on anything!' })
      this.setState({
        topics: topics
      })
    })
  }

  changeOrderSort = () => {
    console.log('CHANGING ORDER!!!!')
    this.setState({
      params: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar topics={this.state.topics} changeOrderSort={this.changeOrderSort} />
        <Router>
          <ArticleList path='/' />
          <ArticleList path='/articles/' />
          <ArticleList path='/articles/:topic' />
          <Article path='/articles/:topic/:article_id' />
        </Router>

      </div>
    );
  }
}

export default App;
