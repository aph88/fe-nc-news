import React from 'react'
import Comment from './comment'
import axios from 'axios'

class CommentList extends React.Component {
    state = {
        comments: [],
        visible: false

    }

    componentDidMount () {
        axios.get(`https://aph88-nc-news.herokuapp.com/api/articles/${this.props.art_id}/comments`).then((res) => {
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
                <button onClick={this.showComments}>{this.state.visible ? 
                'hide comments': 'show comments'} ({this.props.num})</button>

                {(this.state.visible) ? this.state.comments.map(comment => {
                    return (<Comment key={comment.comment_id} comment={comment}/>)
                }
                ) : null}
            </div>
        )
    }
}
export default CommentList