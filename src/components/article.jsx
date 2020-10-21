import React from 'react'
import axios from 'axios'
import ShowPostFormButton from './showPostFormButton'
import Vote from './vote'
import CommentList from './commentList'
import PostForm from './postForm'

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
        <Vote/>
        <p>{this.state.article.body}</p>
        <ShowPostFormButton/>
        <PostForm/>
        {(this.state.loaded) ? <CommentList num={this.state.article.comment_count} art_id={this.state.article.article_id}/> : null}        
        </div>)
    }
}

export default ArticleBody