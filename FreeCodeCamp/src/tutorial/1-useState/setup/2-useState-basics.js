import React, { useState } from 'react';




const UseStateBasics = () => {

  // console.log(useState('Hello'))

  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)


  const [text, setText] = useState('Random Title')

  const handleClick = () => { 
      if( text === 'Random Title') {
        setText('Chnaged Title')

      } else {
        setText('Random Title')
      }
  }


  return(
        <>
            <h1> {text} </h1>
            <button className="btn" onClick={handleClick} > Click </button>
        </>
  )
};



export default UseStateBasics;