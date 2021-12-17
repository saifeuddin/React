import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements


const UseRefBasics = () => {

  const refInput = useRef(null)
  const refDiv = useRef(null)


  const handleS = (e) => {
    e.preventDefault()
    console.log(refInput.current.value)
    console.log(refDiv.current)
  }

  useEffect(() => {
    refInput.current.focus()
  }, [])

  return(
    <>
      <form action="" className='form' onSubmit={handleS}>
        <div>
          <input type="text" placeholder="Text Here" ref={refInput}/>
          <button type='submit'>Submit</button>
        </div>
      </form>

      <div ref={refDiv}>
          <h2>Uddin</h2>
      </div>
    </>
  )


}


export default UseRefBasics