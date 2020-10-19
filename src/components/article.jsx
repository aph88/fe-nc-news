import React from 'react'
import ShowCommentsButton from './showCommentsButton'
import ShowPostFormButton from './showPostFormButton'
import Vote from './vote'
import CommentList from './commentList'

class ArticleBody extends React.Component {
state = {

}

render () {
    return (<div>
        <p>Details of Article go here</p>
        <ShowCommentsButton/>
        <ShowPostFormButton/>
        <Vote/>
        <CommentList/>
        </div>)
}
}

export default ArticleBody