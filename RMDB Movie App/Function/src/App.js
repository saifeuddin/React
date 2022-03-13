import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import { GlobalStyle } from './GlobalStyle'
import Header from "./Components/Header"
import Home from "./Components/Home"
import Movie from "./Components/Movie"
import NotFound from "./Components/NotFound"



const App = () => (
    <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <GlobalStyle />
    </Router>
)





export default App