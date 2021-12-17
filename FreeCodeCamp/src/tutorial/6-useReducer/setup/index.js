import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';



// reducer function
const reducer = (state, action) => {
  console.log(state, action)

  if (action.type === 'ADD_ITEM') {
    const newItem = [...state.people, action.payLoad]

    return {...state, people: newItem, isModalOpen: true, modalContent: 'item added'}

  } if (action.type === 'NO_VALUE') {
    return{...state, isModalOpen: true, modalContent: 'Please Enter Value'}

  } if (action.type === 'CLOSE_MODAL') {
    return{...state, isModalOpen: false}

  } if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter( (p)=> {
      return p.id !== action.payLoad
    })

    return { ...state, people: newPeople}
  }

  throw new Error('No matching Types')
}

const defaultSate = {
  people: [],
  isModalOpen: false,
  modalContent: ""
}


const Index = () => {

  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultSate)



  const handleS = (e) => {
    e.preventDefault()

    if(name) {
      const newItems = {id: new Date().getTime().toString(), name}
      dispatch({type: 'ADD_ITEM', payLoad: newItems})
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'})
    }

  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }


  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}

      <form action="" className='form' onSubmit={handleS}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Enter"
            onChange={(e)=> setName(e.target.value)} 
          />
        </div>
        <button type='submit'> Add</button>
      </form>

      {state.people.map((p)=> {
        return(
          <div key={p.id} className='item'>
            <h4>{p.name}</h4>
            <button
                onClick={()=>
                  dispatch(
                    {type: 'REMOVE_ITEM', payLoad: p.id}
                )}
            >
              Remove
            </button>
          </div>
        )
      })}
    </>
  )


}

export default Index;
