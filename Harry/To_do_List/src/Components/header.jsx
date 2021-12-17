import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
export default function Header(props) {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title} </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span></button>
                
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about">About </Link>
                            </li>
                        </ul>

                        {props.searchBar?
                        <form className="d-flex">
                            <input type="search" className="form-control me-2" placeholder="Search" area-label="Search" />
                            <button className="btn btn-outline-success" type="submit" >Search</button>
                        </form> : ""}
                    </div>
            </div>
            </nav>
    )
}

Header.defaultProps = {
    title:"Your title here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired

}
