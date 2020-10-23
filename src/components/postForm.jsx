import axios from 'axios'
import React from 'react'

class PostForm extends React.Component {
    state = {
        formtext: ''        
    }

    submitForm = (e) => {
        e.preventDefault();
        axios.post(`https://aph88-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`, {body: this.state.formtext, username: this.props.user}).then((res) => {
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
        console.log(this.state.formtext)
        return (<form onSubmit={this.submitForm}>
            <label htmlFor="postcomment">Write your post</label>
            <br/>
            <textarea name="postcomment" placeholder="Write your post..." value={this.state.formtext} onChange={this.updateText} />
            <button type="submit">Submit post</button>
        </form>)
    }
}

export default PostForm