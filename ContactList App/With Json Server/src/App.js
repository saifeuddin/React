import React, { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';

import { v4 as uuidv4} from 'uuid'


import AddContacts from './Components/AddContacts.jsx'
import Header from './Components/Header.jsx'
import ContactList from './Components/ContactList.jsx'
import ContactDetails from './Components/ContactDetails.jsx';

// API for Data Fetch
import api from './API.js'





function App() {

    const [contacts, setContacts] = useState([])
    const [searchTarm, setSearchTarm] = useState('')
    const [searchResults, setSearchResults] = useState([])


// Fetch from Json Server
    const fetchdata = async ()=> {
        const res = await api('/contacts')
        return res.data
    }



// Add data to Json Server
    const addHandler = async (contact) => {
        const req = {
            id: uuidv4(),
            ...contact
        }
        const res = await api.post('/contacts', req).then(res => res.data)

        console.log(res)
        setContacts([...contacts, {...contact}])
    }



// Delete data from Json Server
    const removeHandler = async (id) => {
        await api.delete('/contacts/'+id)

        const newContact = contacts.filter( (c) => {
            return c.id !== id
        })

        setContacts(newContact)
    }



    const searchHandler = (search) => {
        setSearchTarm(search)

        if(searchTarm !== '') {
            const newContactList = contacts.filter((c)=> {
                return Object.values(c).join(' ').toLowerCase().includes(searchTarm.toLowerCase())
            })

            setSearchResults(newContactList)

        } else {
            setSearchResults(contacts)

        }
    }




    useEffect(() => {
        const get = async () => {
            const all = await fetchdata()
            if(all) setContacts(all)
        }
        get()
    }, [])




    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path='/add' element={
                    <AddContacts addHandler={addHandler} />
                }/>

                <Route path='/' element={
                    <ContactList contacts={ searchTarm.length < 1 ?  contacts : searchResults}
                        remove={removeHandler}
                        tarm={searchTarm} searchKeyword={searchHandler}
                    />
                }/>

                <Route path='/details/:id' element={
                    <ContactDetails />
                }/>
            </Routes>
        </div>
    )

}


export default App