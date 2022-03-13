import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import { GlobalStyle } from './GlobalStyle'


import Header from "./Components/Header"
import Home from "./Components/Home"
import MovieWithparams from "./Components/Movie"
import NotFound from "./Components/NotFound"
import Login from "./Components/Login"

import UserProvider from "./context"



const App = () => (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:movieId' element={<MovieWithparams />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </UserProvider>
    </Router>
)





export default App