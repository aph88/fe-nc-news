import React from 'react'
import Vote from './vote'

const Comment = (props) => {
    return (
        <div>
            <h4>{`Author: ${props.comment.author}, Created at: ${props.comment.created_at}, Votes: ${props.comment.votes}`}</h4>
            <p>{props.comment.body}</p>
            <Vote/>
        </div>
    )
}

export default Comment
