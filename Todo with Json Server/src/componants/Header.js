import React from 'react'

function Header ({ title, show, close }) {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button style={{backgroundColor: close? 'red' : 'blue'}} onClick={show}> {close ? 'Colse' : 'Show'} </button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
