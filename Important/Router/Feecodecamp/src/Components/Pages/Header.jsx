import React, { useState} from 'react'
import {Link} from 'react-router-dom';


function Header() {

    return (
        <div>
            <h1> React Router Tutorial  </h1>
            <Link to='/'> Home </Link>
            <span> ↠ </span>
            <Link to='/about'> About </Link>
            <span> ↠ </span>
            <Link to='/profile'> Profile </Link>
            <span> ↠ </span>
            <Link to='/post'> Post </Link>
            <br />
            <br />
            <hr />
        </div>
    )
}


export default Header