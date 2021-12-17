import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator



const ShortCircuit = () => {

  const [ text, setText ] = useState('')
  const [isError, setIsError] = useState(false)

  // const firstValue = text || 'First Value'
  // const secondValue = text && 'Second Value'


  return <>
    {/* <h1> {firstValue} </h1> */}
    {/* <h1> {secondValue} </h1 > */}
    <h1> {text || 'Saife'} </h1>
    <button className='btn' onClick={()=> setIsError(!isError)} >
        Toggle Error
    </button>

    {isError && <h2> Error... </h2>}
    {isError ? <p>Three...</p> : <h2> there is no Error... </h2>}
  </>
}



export default ShortCircuit;