import React from 'react'
import axios from 'axios'
import ShowCommentsButton from './showCommentsButton'
import ShowPostFormButton from './showPostFormButton'
import Vote from './vote'
import CommentList from './commentList'
import PostForm from './postForm'

class ArticleBody extends React.Component {
state = {
    article: {},
    show: true
}

componentDidMount () {
    axios.get(`https://aph88-nc-news.herokuapp.com/api/articles/${this.props.article_id}`).then((res) =>
    {
        const article = res.data.article
        this.setState({
                article: article,
                show: true
            })

    }    
    )
}

render () {
    return (<div>
        <Vote/>
        <p>{this.state.article.body}</p>
        <ShowCommentsButton num={this.state.article.comment_count}/>
        <ShowPostFormButton/>
        <PostForm/>        
        <CommentList id={this.state.article.article_id}/>
        </div>)
    }
}

export default ArticleBody