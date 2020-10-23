import React from 'react'
import Vote from './vote'
import CommentList from './commentList'
import PostForm from './postForm'
import ArticleList from './articleList'
import { getArticle, patchArticleVotes } from '../api'

class ArticleBody extends React.Component {
state = {
    article: {},
    loaded: false,
    postFormVisible : false,
    user: 'cooljmessy'
}

componentDidMount () {
    getArticle(this.props.article_id).then((res) =>
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
        getArticle(this.props.article_id).then((res) =>
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
    const newArticle = {...this.state.article}
    newArticle.votes += num;
    this.setState({
        article: {...newArticle}
    })
    patchArticleVotes(this.props.article_id, {inc_votes: num}) 
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
        <button className="btn" onClick={this.togglePostForm}>{!this.state.postFormVisible ? 'Post a comment' : 'Hide post form'}</button>
        {this.state.postFormVisible ? <PostForm article_id={this.props.article_id} user={this.state.user}/> : null}
        {(this.state.loaded) ? <CommentList num={this.state.article.comment_count} art_id={this.state.article.article_id} user={this.state.user}/> : null}        
        {this.props.path ? <ArticleList topic={this.state.article.topic}/> : null}
        </div>)
    }
}

export default ArticleBody