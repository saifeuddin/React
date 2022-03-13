import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {

    const styles = ({ isActive })=> {
        return {
            margin: '5px',
            fontWeight: isActive? 'bold' : 'normal',
            textDecoration: isActive? 'none' : 'underline'
        }
    }



    return (
        <nav>
            <NavLink style={styles} to='/'> Home </NavLink>
            <NavLink style={styles} to='/about'> About </NavLink>
            <NavLink style={styles} to='/order'> Orders </NavLink>
        </nav>
    )
}


export default Navbar