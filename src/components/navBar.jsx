import { navigate } from '@reach/router'
import React from 'react'
import axios from 'axios'

class NavBar extends React.Component {

    state = {
        topics: [{slug: '', description: 'Everything on anything!'}]      
    }   
    
    componentDidMount () {
        axios.get('https://aph88-nc-news.herokuapp.com/api/topics').then(({data: {topics}}) => {
            topics.unshift({slug: '', description: 'Everything on anything!'})
            this.setState({
                topics: topics
            })
        })        
    }

    changePage = (event) => {
        const page = event.target.value;
        navigate(`/articles/${page}`)        
    }

    render () {
        return (<nav>
               <select onChange={this.changePage}>                      
            {this.state.topics.map(topic => {
                return(
                    <option value={topic.slug} key={topic.slug}>{topic.slug === '' ? 'articles' : topic.slug}</option>                                    
                )    
            }
            )}     
            </select>
            </nav>)
    }

}

export default NavBar