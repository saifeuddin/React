import React from 'react'
import {NavLink} from 'react-router-dom';


function Header() {

    const styles = {
        textAlign: 'center'
    }

    const nav = {
        textDecoration : 'none',
        padding: '20px',
        border: '2px groove white',
        margin: '10px',
        borderRadius: '10px'
    }

    return (
        <div>
            <br />
            <h1 style={styles}> Contact Manager </h1>
            <br />
            <br />
                <NavLink to='/add' style={nav}> Create Contact  </NavLink>
                <NavLink to='/' style={nav}> View Contact  </NavLink>
            <br />
            <br />
            <hr />
        </div>
    )
}

export default Header
