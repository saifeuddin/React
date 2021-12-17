import React, { useState, useContext } from 'react';
import { data } from '../../../data';



// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext()



const ContextAPI = () => {
  const [people, setPeople] = useState(data);


  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    })
  }


  return (
    <PersonContext.Provider value={{removePerson, people}}>
      <h3>Prop Drilling</h3>
      <List />
    </PersonContext.Provider>
  )
}


const List = () => {
  const mainObj = useContext(PersonContext)
  console.log(mainObj)

  return (
    <>
      {mainObj.people.map( (p) => {
        return (
          <SinglePerson
            key={p.id}
              {...p}
          />
        )
      })}
    </>
  )
}


const SinglePerson = ({ id, name }) => {
  const {removePerson} = useContext(PersonContext)
  console.log(removePerson)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}




export default ContextAPI;
