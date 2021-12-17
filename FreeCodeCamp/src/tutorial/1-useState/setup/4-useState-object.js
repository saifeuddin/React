import React, { useState } from 'react';

const UseStateObject = () => {
  
  const [person, setPerson] = useState(
    {
      name:'peter',
      age:24,
      message:'random message',
    }
  )


  const changeM = ()=> {
      setPerson({...person, message: 'hello'})
  }


    return(
      <>
        <h3> {person.name} </h3>
        <h3> {person.age} </h3>
        <h3> {person.message} </h3>
        <button className="btn" onClick={changeM} >Click</button>
      </>
    )
};

export default UseStateObject;
