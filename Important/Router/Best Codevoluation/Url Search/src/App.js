import React from 'react'
import { Routes, Route } from 'react-router'


import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import OrderSummarry from './Components/OerSummarry'
import Products from './Components/Products'




function App() {
    return (
        <>
        <Navbar />
        <br />
        <br />
        <br />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/order' element={<OrderSummarry />}></Route>

            <Route path='/products/' element={<Products />}></Route>
        </Routes>
        </>
    )
}



export default App