import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault()

    if (firstName && email) {

      const person = {id: new Date().getTime().toString(), firstName, email};
        console.log(person);

      setPeople( (p)=> {
        return[...p, person];
      })

      setFirstName('')
      setEmail('')

    } else {
      console.log('Empty Values')
    }
  }


  return <>
    <article>
      <form action="" className='form'>
          <div className='form-control'>
            <label htmlFor="fname"> First Name : </label>
            <input
              type="text"
              id='fname'
              name='fname'
              value={firstName}
              placeholder='Your Name'
              onChange={(e)=> setFirstName(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label htmlFor="email"> Email : </label>
            <input
              type="email"
              id='email'
              name='fname'
              value={email}
              placeholder='Your Name'
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <button type='submit' onClick={handleSubmit}>Add Person</button>
      </form>

      <div className='container'>
          {people.map( (p)=> {
            const {id, firstName, email} = p

            return <div className='item' key={id}>
                <h1>{firstName}</h1>
                <b>{email}</b>
            </div>
          })}
      </div>
    </article>
  </>;


};

export default ControlledInputs;
