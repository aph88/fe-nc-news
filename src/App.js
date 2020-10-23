import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import ArticleList from './components/articleList';
import Header from './components/header';
import NavBar from './components/navBar';
import Article from './components/article'
import ErrorMessage from './components/errorMessage';
import { getAllTopics } from './api';

class App extends React.Component {

  state = {
    topics: [{ slug: '', description: 'Everything on anything!' }],
    params: ''
  }

  componentDidMount() {
    getAllTopics().then(({ data: { topics } }) => {
      topics.unshift({ slug: '', description: 'Everything on anything!' })
      this.setState({
        topics: topics
      })
    })
  }

  changeOrderSort = (paramsText) => {
    this.setState({
      params: paramsText
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar topics={this.state.topics} changeOrderSort={this.changeOrderSort} />
        <Router primary={false}>
          <ArticleList path='/' paramsText={this.state.params} />
          <ArticleList path='/articles/' paramsText={this.state.params} />
          <ArticleList path='/articles/:topic' paramsText={this.state.params} />
          <Article path='/articles/:topic/:article_id' />
          <ErrorMessage default />
        </Router>

      </div>
    );
  }
}

export default App;
