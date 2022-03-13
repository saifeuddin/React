import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'



import App from './App'
import { FavoriteContextProvider } from './Store/Favorite-context'


ReactDOM.render(
        <FavoriteContextProvider>
        <Router>
                <App/>
        </Router>
        </FavoriteContextProvider>,
        document.getElementById('root')
)