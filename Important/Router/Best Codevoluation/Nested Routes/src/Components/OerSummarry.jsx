import React from 'react'
import { useNavigate } from 'react-router-dom';


function OrderSummarry() {

    const navigate = useNavigate()

    return (
        <div>
            Oder confirmed!
            <br />
            <br />
            <button
                // onClick={ ()=> navigate('/')}
                onClick={ ()=> navigate(-1)}
            >
                Back
            </button>
        </div>
    )
}


export default OrderSummarry