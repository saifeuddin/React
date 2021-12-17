import React, { useState, useEffect } from 'react';

// by default runs after every re-render
// cleanup function
// second parameter


const UseEffectBasics = () => {

  const [value, setValue] = useState(0)



  useEffect( ()=> {
    console.log('Call UseEffect');

    if(value >= 1) {
      document.title ='New Title (' + value + ')';
    }
  }, [value])



  useEffect( ()=> {
    console.log('Hello World');
  }, [])



  console.log("Render Component");

  return(
      <>
          <h2>{value}</h2>
          <button className="btn" onClick={ ()=> setValue(value + 1)}>
            Click
          </button>
      </>
  )


};

export default UseEffectBasics;
