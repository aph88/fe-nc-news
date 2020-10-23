import React from 'react'
import { postComment } from '../api';

class PostForm extends React.Component {
    state = {
        formtext: ''        
    }

    submitForm = (e) => {
        e.preventDefault();
        postComment(this.props.article_id, {body: this.state.formtext, username: this.props.user}).then((res) => {
            this.setState({formtext: ''})            
        })
    }

    updateText = (e) => {
        const formtext = e.target.value;
        this.setState({
           formtext: formtext
        })
    }

    render () {
        return (<form onSubmit={this.submitForm}>
            <label htmlFor="postcomment">Write your post</label>
            <br/>
            <textarea name="postcomment" placeholder="Write your post..." value={this.state.formtext} onChange={this.updateText} />
            <button type="submit">Submit post</button>
        </form>)
    }
}

export default PostForm