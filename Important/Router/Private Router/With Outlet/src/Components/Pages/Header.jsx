import React, { } from 'react'
import { NavLink } from 'react-router-dom';


import classes from './Header.module.css'



function Header() {

    return (
        <div>
            <h1> React Router Tutorial  </h1>
            <NavLink to='/'
                className={info => info.isActive? classes.active : ''}
            >
                Home
            </NavLink>
            <span> ↠ </span>
            
            <NavLink
                to='/about'
                className={info => info.isActive ? classes.active : ''}
            >
                About
            </NavLink>
            <span> ↠ </span>
            
            <NavLink
                to='/profile'
                className={info => info.isActive ? classes.active : ''}
                >
                Profile
            </NavLink>
            <span> ↠ </span>
            
            <NavLink
                to='/profile/pp'
                className={info => info.isActive ? classes.active : ''}
            >
                Profile1
            </NavLink>
            <br />
            <br />
            <hr />
        </div>
    )
}


export default Header