import React, { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';

import { v4 as uuidv4} from 'uuid'


import AddContacts from './Components/AddContacts.jsx'
import Header from './Components/Header.jsx'
import ContactList from './Components/ContactList.jsx'
import ContactDetails from './Components/ContactDetails.jsx';

// API for Data Fetch
    // import api from './API.js'





function App() {

    // const contact = [
    //     {
    //         id: 1,
    //         name: 'Saife',
    //         email: 'uddin@gmail.com'
    //     }
    // ]
    // const [contacts, setContacts] = useState(contact)

    const [contacts, setContacts] = useState([])
    console.log(...contacts)


// Add
    const addHandler = (contact) => {
        setContacts([...contacts, {id: uuidv4(), ...contact}])
    }

// remove
    const removeHandler = (id) => {
        const newcontactList = contacts.filter(c => {
            return c.id !== id
        })

        setContacts(newcontactList)
    }


    useEffect(() => {
        let fetch = JSON.parse(localStorage.getItem('contacts'))
        setContacts(fetch)
    }, [])

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])




    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path='/add' element={
                    <AddContacts addHandler={addHandler} />
                }/>
                <Route path='/' element={
                    <ContactList contacts={contacts} remove={removeHandler} />
                }/>
                <Route path='/details/:id' element={
                    <ContactDetails />
                }/>
            </Routes>
        </div>
    )

}



export default App