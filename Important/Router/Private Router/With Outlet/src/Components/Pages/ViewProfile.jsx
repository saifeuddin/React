import React, {  } from 'react'
import { Navigate, Outlet } from 'react-router'


const ViewProfile = (props) => {

    const login = props.login


    return (
        <>
            { login ? <Outlet /> : <Navigate to='/' /> }
        </>
    )
}


export default ViewProfile