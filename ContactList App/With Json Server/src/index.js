import React from 'react'
import reactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//   Bootstrap and Icons
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
// import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss'


import App from './App'


reactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)

