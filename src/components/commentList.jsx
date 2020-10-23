import React from 'react'
import Comment from './comment'
import { getComments } from '../api'

class CommentList extends React.Component {
    state = {
        comments: [],
        visible: false

    }

    componentDidMount () {
        getComments(this.props.art_id).then((res) => {
        const comments = res.data.comments;    
        this.setState({
                comments: comments,
            })
        })
    }

    showComments = () => {
        this.setState((prevState) => {
            const visible = !prevState.visible
            return {visible}
        })
    }

    render () {
        return (
            <div>
                <button className="btn" onClick={this.showComments}>{this.state.visible ? 
                'hide comments': 'show comments'} ({this.props.num})</button>

                {(this.state.visible) ? this.state.comments.map(comment => {
                    return (<Comment key={comment.comment_id} comment={comment} user={this.props.user} />)
                }
                ) : null}
            </div>
        )
    }
}
export default CommentList