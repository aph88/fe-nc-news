import React from 'react'

const Vote = (props) => {
    return (<div>
        <button onClick={() => {props.updateVotes(1)}}>I LIKE IT!</button>
        <button onClick={() => {props.updateVotes(-1)}}>I HATE IT!</button>
    </div>)
}

export default Vote