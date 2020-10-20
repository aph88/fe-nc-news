import React from 'react'
import Comment from './comment'
import axios from 'axios'

class CommentList extends React.Component {
    state = {
        article: {comments: []}

    }

    componentDidMount () {
        console.log(this.props)
        axios.get(`https://aph88-nc-news.herokuapp.com/api/articles/${this.props.id}/comments`).then((res) => {
        const comments = res.data.comments;    
        this.setState({
                comments: comments 
            })
        })
    }

    render () {
        return (
            <div>
                <p>Listing comments</p>
                {this.state.article.comments.map(comment => {
                    return (<Comment key={comment}/>)
                }
                )}
            </div>
        )
    }
}
export default CommentList