import React from 'react'
import ShowCommentsButton from './showCommentsButton'
import ShowPostFormButton from './showPostFormButton'
import Vote from './vote'
import CommentList from './commentList'
import PostForm from './postForm'

class ArticleBody extends React.Component {
state = {

}

render () {
    return (<div>
        <p>Details of Article go here</p>
        <Vote/>
        <ShowCommentsButton/>
        <ShowPostFormButton/>
        <PostForm/>        
        <CommentList/>
        </div>)
}
}

export default ArticleBody