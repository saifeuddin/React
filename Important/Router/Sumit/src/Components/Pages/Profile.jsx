import React, { useEffect } from 'react'
import {useNavigate, NavLink, Outlet} from 'react-router-dom'



import classes from './Header.module.css'



function Profile (props) {

    // useNavigate hook
    const navigate = useNavigate()

    const { login } = props
    // const login = props.login

    useEffect(() => {
        !login ? navigate('/') : navigate('/profile')
    }, [login, navigate])


    return (
    <>
        <div>
            <h1> This is Profile Page </h1>

            <ul>
                <li>
                    <NavLink to='viewprofile'
                        className={info => info.isActive? classes.active : ''}
                    >
                        View profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to='editprofile'
                        className={info => info.isActive? classes.active : ''}
                    >
                        Edit profile
                    </NavLink>
                </li>
            </ul>
        </div>


        {/* Using Children */}
        <Outlet />
    </>
    )

}


export default Profile