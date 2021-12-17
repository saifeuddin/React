import React, {  } from 'react'



const Navbar = ({ totalCounters }) => {

    console.log('Navbar-Rendered')

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="a">
                Navbar 
                <span 
                    className="badge bg-secondary m-2">
                        {totalCounters}
                </span>
            </a>
        </nav>
    )
}

export default Navbar



