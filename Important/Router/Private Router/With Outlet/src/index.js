import React from 'react'
import reactDom from 'react-dom'

// Router
import { BrowserRouter } from 'react-router-dom'


// Components
import App from './App'


reactDom.render(

    // Using basename
        // <BrowserRouter basename='/tuto'>



    // Not Working any more
        // <BrowserRouter basename='/tuto' forceRefresh getUserConfirmation={(message, callback) => {
        //         callback(window.confirm())
        // }}>




    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)

