import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

    const [size, setSize] = useState(window.innerWidth)
    console.log(size)


    const checkSize = () => {
        setSize(window.innerWidth)
    }


    useEffect(() => {
      console.log('UseEffect')
      window.addEventListener('resize', checkSize)
      return() => {
        console.log('CleanUp')
        window.removeEventListener('resize', checkSize)
      }
    }, [])



    console.log('Render')
    return(
      <>
        <h1> Window </h1>
        <h2> {size} </h2>
      </>
    )

};

export default UseEffectCleanup;
