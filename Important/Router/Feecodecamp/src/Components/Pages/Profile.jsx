import React, { useEffect } from 'react'
import {useNavigate, Routes, Route, Link , useLocation} from 'react-router-dom'



import ViewProfile from './ViewProfile'
import EditProfile from './EditProfile'




function Profile ({login}) {

    // useNavigate hook
    // const navigate = useNavigate()

    // useLocation Hook
    // const {pathname} = useLocation()


    // useEffect(() => {
    //     !login ? navigate('/') : navigate('/profile')
    // }, [login, navigate])


    return (
    <>
        <div>
            <h1> This is Profile Page </h1>

            <ul>
                <li>
                    <Link to="viewprofil"> View profile </Link>
                </li>
                <li>
                    <Link to="editprofile"> Edit profile </Link>
                </li>
            </ul>
        </div>



        {/* Nested Router */}
        <Routes>
            <Route path="viewprofile" element={<ViewProfile />}></Route>
            <Route path="editprofile" element={<EditProfile />}></Route>
        </Routes>
    </>
    )

}


export default Profile