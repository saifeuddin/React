import React from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {

    const navigate = useNavigate()


    return (
        <>
            <div>
                Home
            </div>
            <br />
            <br />
            <button
                onClick={ ()=> navigate('order')}

            // Got to browsers home page direcly
                // onClick={ ()=> navigate('order', {replace: true})}
            >
                Place an Order
            </button>
        </>
    )
}



export default Home