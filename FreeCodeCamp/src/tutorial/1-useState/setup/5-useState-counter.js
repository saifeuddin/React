import React, { useState } from 'react';



const UseStateCounter = () => {

  const [value, setValue] = useState(0)


  const reset = ()=> {
    setValue(0)
  }


  const complexIncrease = ()=> {
    setTimeout(() => {
      // setValue(value + 1)

      setValue((prevState)=>{
        return prevState + 1
      })

    }, 3000);
  }




  return (
    <>
      <section style={{margin: '4rem 0'}}>
          <h2> Regular Counter </h2>
          <h1> {value} </h1>

          <button className="btn" onClick={()=>setValue(value+1)}>
              Increase
          </button>

          <button className="btn" onClick={ reset } >
              Reset
          </button>

          <button className="btn" onClick={ ()=> setValue (value-1)} >
                Decrease
          </button>
      </section>


      <section style={{ margin: '4rem 0' }}>
          <h3> More Complex Counter </h3>
          <h1>{value}</h1>
          <button className="btn" onClick={complexIncrease} >
                Increae later
          </button>
      </section>
    </>
  )
}



export default UseStateCounter;
