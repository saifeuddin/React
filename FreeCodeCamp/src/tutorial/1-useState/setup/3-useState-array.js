import React, { useState } from 'react';
import { data } from '../../../data';


const UseStateArray = () => {

    const [people, setPeople] = useState(data)
    
    const removeItem = (id)=> {
        let newPeople = people.filter( (p)=> p.id!== id )
        setPeople(newPeople)
    }


    return(
      <>
        {people.map( (p) => {
              const {id, name} = p

              return(
                <div key={id} className='item'>
                    <h4> {name} </h4>
                    <button className='btn'
                      onClick={ ()=> removeItem(id)}
                    >
                      Remove Item
                    </button>
                </div>
              )
          })}

          <button className='btn'
            onClick={ ()=> setPeople([])}
          >
              Clear Item
          </button>
      </>
    )
};

export default UseStateArray;
