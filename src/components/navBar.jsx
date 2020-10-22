import { navigate } from '@reach/router'
import React from 'react'

class NavBar extends React.Component {

 

    changePage = (event) => {
        const page = event.target.value;
        navigate(`/articles/${page}`)        
    }

    render () {
    return (<nav>
               <select onChange={this.changePage} defaultValue='Please select a topic'>                      
                <option disabled={true}>Please select a topic</option>
            {this.props.topics.map(topic => {
                return(
                    <option value={topic.slug} key={topic.slug}>{topic.slug === '' ? 'articles' : topic.slug}</option>                                    
                )    
            }
            )}     
            </select>
            <select onChange={(event) => {
                const params = event.target.value;
                this.props.changeOrderSort(params)

                }}>
                <option value="sort_by:created_at">Date Created (Newest first)</option>
                <option value="sort_by:created_at:order:asc">Date Created (Oldest first)</option>
                <option value="sort_by:comment_count">Comments (Most first)</option>
                <option value="sort_by:comment_count:order:asc">Comments (Least first)</option>
                <option value="sort_by:votes">Votes (Most first)</option>
                <option value="sort_by:votes:order:asc">Votes (Least first)</option>
            </select>
            </nav>)
    }

}

export default NavBar