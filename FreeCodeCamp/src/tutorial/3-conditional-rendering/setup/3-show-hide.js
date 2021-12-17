import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false)


  return(
    <>
      <h1>
        show/hide
      </h1>
      <button className='btn' onClick={()=> setShow(!show)}>Toggle</button>

      {show && <Item />}
    </>
  )
};


const Item = ()=> {

  const [size, setSize] = useState(window.innerWidth +" | "+ window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    
    return()=> {
      window.removeEventListener('resize', checkSize)
    }
  }, [])


  const checkSize = () => {
    setSize(window.innerWidth +" | "+ window.innerHeight)
  }

  return <div style={{marginTop: '2rem',}}>
    <h1>Window</h1>
    <h2>Size: {size} </h2>
  </div>
}

export default ShowHide;
