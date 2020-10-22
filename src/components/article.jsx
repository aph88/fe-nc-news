import React from 'react'
import axios from 'axios'
import ShowPostFormButton from './showPostFormButton'
import Vote from './vote'
import CommentList from './commentList'
import PostForm from './postForm'
import ArticleList from './articleList'

class ArticleBody extends React.Component {
state = {
    article: {},
    loaded: false
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

render () {
    return (<div>
        {this.props.path ? <div><h4>{this.state.article.title}</h4>
        <p>{`Created at: ${this.state.article.created_at}, by: ${this.state.article.author}, Votes: ${this.state.article.votes} Comments: ${this.state.article.comment_count}`}</p></div>
        : null}        
        <Vote/>
        <p>{this.state.article.body}</p>
        <ShowPostFormButton/>
        <PostForm/>
        {(this.state.loaded) ? <CommentList num={this.state.article.comment_count} art_id={this.state.article.article_id}/> : null}        
        {this.props.path ? <ArticleList topic={this.state.article.topic}/> : null}
        </div>)
    }
}

export default ArticleBody