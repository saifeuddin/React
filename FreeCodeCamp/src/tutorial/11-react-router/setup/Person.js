import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';




const Person = () => {

  const [name, setName] = useState('Default Name')
  const {id} = useParams()

  useEffect(() => {
    const newP = data.find( (p)=> p.id === parseInt(id))
    setName(newP.name)
  }, [])



  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
          Back to People
      </Link>
    </div>
  )

}

export default Person;
