import React from 'react'
import Comment from './comment'

class CommentList extends React.Component {
    state = {
        article: {comments: [1,2,3,4]}

    }

    render () {
        return (
            <div>
                <p>Listing comments</p>
                {this.state.article.comments.map(comment => {
                    return (<Comment/>)
                }
                )}
            </div>
        )
    }
}
export default CommentList