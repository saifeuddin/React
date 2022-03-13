import React, {  } from 'react'
import { Navigate, Outlet } from 'react-router'


const ViewProfile = (props) => {

    const login = props.login


    return (
        <>
            {/* With replace attribute */}

            { login ? <Outlet /> : <Navigate replace to='/' /> }
        </>
    )
}


export default ViewProfile