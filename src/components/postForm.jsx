import React from 'react'

class PostForm extends React.Component {
    state = {

    }

    render () {
        return (<form>
            <label htmlFor="postcomment">Write your post</label>
            <br/>
            <textarea name="postcomment"/>
            <button type="submit">Submit post</button>
        </form>)
    }
}

export default PostForm