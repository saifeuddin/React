import React from 'react'
import { Routes, Route } from 'react-router'


import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import OrderSummarry from './Components/OerSummarry'
import Products from './Components/Products'
import FeaturedProducts from './Components/FeaturedProducts'
import Admin from './Components/Admin'




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

            {/* Nested routes */}
            <Route path='/products' element={<Products />}></Route>
            <Route path='/products/:id' element={<FeaturedProducts />} />
            <Route path='/products/admin' element={<Admin />} />
            {/* Nested routes */}
        </Routes>
        </>
    )
}



export default App