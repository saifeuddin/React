import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Products() {
    return (
        <>
            <div>
                <input type="search" placeholder='Search products'/>
            </div>
            <nav>
                <Link to='featured'>Frature</Link>
                {' '}
                <Link to='new'>New</Link>
            </nav>

            <Outlet></Outlet>
        </>
    )
}

export default Products
