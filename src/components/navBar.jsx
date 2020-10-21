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
            </nav>)
    }

}

export default NavBar