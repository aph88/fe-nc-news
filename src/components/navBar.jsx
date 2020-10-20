import { Link } from '@reach/router'
import React from 'react'

class NavBar extends React.Component {

    state = {

    }   
    
    render () {
        return (<nav><Link to='/articles'>
            <h4>Press to display articles</h4>
            </Link>
            </nav>)
    }

}

export default NavBar