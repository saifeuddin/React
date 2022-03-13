import React, { useState } from 'react'

// Router
import { Routes, Route, Navigate } from 'react-router'


// Component
import Header from './Components/Pages/Header'
import Home from './Components/Pages/Home.jsx'
import About from './Components/Pages/About.jsx'
import Profile from './Components/Pages/Profile.jsx'
import Notfound from './Components/Pages/Notfound'
import Post from './Components/Pages/Post .jsx'

import ViewProfile from './Components/Pages/ViewProfile'
import EditProfile from './Components/Pages/EditProfile'



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


                <Route path='/profile/*' element={<Profile login={login} />}>

                {/* </Route> */}
                {/* <Route path='/profile/*' element={ login? <Profile /> : <Navigate to='/'/>}> */}
                    {/* Nested Router */}
                        <Route path='viewprofile' element={<ViewProfile />}></Route>
                        <Route path='editprofile' element={<EditProfile />}></Route>
                </Route>



                <Route path='/post/*' element={<Post />}></Route>
                <Route path='/post/:id' element={<Post />}></Route>



                {/* Not Found */}
                <Route path='*' element={<Notfound />}></Route>
            </Routes>
        </>
    )
}

export default App
