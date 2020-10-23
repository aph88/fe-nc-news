import React from 'react'
import Vote from './vote'
import { deleteCommentAtAPI } from '../api'

class Comment extends React.Component {

    state = {
        deleted: false        
    }

    deleteComment = () => {
        deleteCommentAtAPI(this.props.comment.comment_id).then((res) => {
            this.setState({deleted: true})
        })
    }

    render () {
        return (
            <div className='comment-list-comment'>
                <h4>{`Author: ${this.props.comment.author}, Created at: ${this.props.comment.created_at}, Votes: ${this.props.comment.votes}`}</h4>
                {(this.props.user === this.props.comment.author && !this.state.deleted) ? <button onClick={this.deleteComment}>DELETE MY COMMENT!</button> : null}
                {!this.state.deleted ? <p>{this.props.comment.body}</p> : <p>COMMENT DELETED!</p>}            
                
                <Vote/>
            </div>
        )
    }

}

export default Comment
