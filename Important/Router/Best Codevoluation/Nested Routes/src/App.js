import React from 'react'
import { Routes, Route } from 'react-router'


import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import OrderSummarry from './Components/OerSummarry'
import Products from './Components/Products'
import FeaturedProducts from './Components/FeaturedProducts'
import NewProducts from './Components/NewProducts'
import Nomatch from './Components/Nomatch'


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
            <Route path='/products' element={<Products />}>
                <Route index element={<FeaturedProducts />} />
                <Route path='featured' element={<FeaturedProducts />} />
                <Route path='new' element={<NewProducts title={'This is our new products'} />} />
            </Route>
            <Route path='*' element={<Nomatch />}></Route>
        </Routes>
        </>
    )
}



export default App