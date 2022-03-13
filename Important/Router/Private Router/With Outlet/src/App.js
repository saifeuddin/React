import React, { useState } from 'react'

// Router
import { Routes, Route, Navigate } from 'react-router'


// Component
import Header from './Components/Pages/Header'
import Home from './Components/Pages/Home.jsx'
import About from './Components/Pages/About.jsx'
import Profile from './Components/Pages/Profile.jsx'
import Notfound from './Components/Pages/Notfound'

import ViewProfile from './Components/Pages/ViewProfile'



function App() {

    const [login, setLogin] = useState(false)

    const clickHandle = () => {
        setLogin(!login)
    }



    return (
        <>
            <Header />

            <button onClick={clickHandle}>
                {login? "Logout":"Login"}
            </button>


            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>

                {/* Private Router */}
                <Route
                    path = '/profile/*'
                    element={<ViewProfile login={login} /> }
                >
                    <Route path='pp' element={<Profile />}></Route>
                    <Route path='hh' element={<Home />}></Route>
                </Route>



                {/* Not Found */}
                <Route path='*' element={<Notfound />}></Route>
            </Routes>
        </>
    )
}

export default App
