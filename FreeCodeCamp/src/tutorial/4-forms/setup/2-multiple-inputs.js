import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const MultipleControlledInputs = () => {
  const [people, setPeople] = useState([]);

  const [person, setPerson] = useState({firstName: '', email: '', age: ''})



  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setPerson({...person, [name]: value})
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if(person.firstName && person.email && person.age) {
      const newPerson = {...person, id: new Date().getTime().toString()}

      setPeople([...people, newPerson])
    }

    console.log(person)
  }



  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>

          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              placeholder='Your Name'
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              placeholder='name@gmail.com'
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'> Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              placeholder="Your Age"
              onChange={handleChange}
            />
          </div>

          <button type='submit'> Add Person</button>

        </form>

        {people.map( (p, index) => {
          const { id, firstName, email, age } = p

          return (
            <div className='item' key={id}>
              <h4>Name is: {firstName}</h4>
              <p> Email: {email}</p>
              <b>Age: {age}</b>
            </div>
          )

        })}
      </article>
    </>
  )


}

export default MultipleControlledInputs;
