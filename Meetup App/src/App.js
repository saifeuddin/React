import React from 'react'
import { Routes, Route } from 'react-router-dom'



import MainNavigation from './Components/LayOut/MainNavigation'
import AllMeetUps from './Pages/AllMeetUps'
import Favorites from './Pages/Favorites'
import NewMeetUp from './Pages/NewMeetUp'




function App() {

    return (
        <div>
            <MainNavigation />
            <Routes>
                <Route
                    path='/'
                    element={<AllMeetUps />}
                />
                <Route
                    path='/newmeetup'
                    element={<NewMeetUp />}
                />
                <Route
                    path='/favorites'
                    element = {<Favorites />}
                />
            </Routes>
        </div>
    )
}


export default App