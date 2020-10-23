import React from 'react'
import axios from 'axios'
import Vote from './vote'
import CommentList from './commentList'
import PostForm from './postForm'
import ArticleList from './articleList'

class ArticleBody extends React.Component {
state = {
    article: {},
    loaded: false,
    postFormVisible : false,
    user: 'cooljmessy'
}

componentDidMount () {
    axios.get(`https://aph88-nc-news.herokuapp.com/api/articles/${this.props.article_id}`).then((res) =>
    {
        const article = res.data.article
        this.setState({
                article: article,
                loaded: true
            })
    }    
    )
}

componentDidUpdate (prevProps,prevState) {
    if(this.props.article_id !== prevProps.article_id){
        axios.get(`https://aph88-nc-news.herokuapp.com/api/articles/${this.props.article_id}`).then((res) =>
        {
            const article = res.data.article
            this.setState({
                    article: article,
                    loaded: true
                })
        })   
    }
}

voteOnArticle = (num) => {
    console.log('Hello!')
    const newArticle = {...this.state.article}
    newArticle.votes += num;
    this.setState({
        article: {...newArticle}
    })
    axios.patch(`https://aph88-nc-news.herokuapp.com/api/articles/${this.props.article_id}`, {inc_votes: num})
}

togglePostForm = () => {
    this.setState((prevState) => {
        return {postFormVisible: !prevState.postFormVisible}
    })
}

render () {
    return (<div>
        {this.props.path ? <h4>{this.state.article.title}</h4> : null}        
        <p>{`Created at: ${this.state.article.created_at}, by: ${this.state.article.author}, Votes: ${this.state.article.votes} Comments: ${this.state.article.comment_count}`}</p>
        <Vote updateVotes={this.voteOnArticle}/>
        <p>{this.state.article.body}</p>
        <button onClick={this.togglePostForm}>{!this.state.postFormVisible ? 'Post a comment' : 'Hide post form'}</button>
        {this.state.postFormVisible ? <PostForm article_id={this.props.article_id} user={this.state.user}/> : null}
        {(this.state.loaded) ? <CommentList num={this.state.article.comment_count} art_id={this.state.article.article_id} user={this.state.user}/> : null}        
        {this.props.path ? <ArticleList topic={this.state.article.topic}/> : null}
        </div>)
    }
}

export default ArticleBody