import React, { useRef } from 'react'
import './styles.css'
import ContactCard from './ContactCard'



function ContactList ({ contacts, remove, tarm, searchKeyword }) {

    const input = useRef('')

    const styles = {
        textAlign: 'center'
    }


    const search = {
        width: '300px',
        display: 'flex',
        justifyContent: 'space-around',
        // border: '1px solid red'
    }


    const removehandler = (id) => {
        remove(id)
    }
    const getValue = () => {
        const {value} = input.current
        searchKeyword(value)
    }




    const list = contacts.map((c) => {
        return <ContactCard key={c.id} c={c} removehandler={removehandler} />
    })


    return (
        <div>
            <br />
            <h1 style={styles}> List of Contacts </h1>
            <br />

            <div style={search}>
                <input type="text" value={tarm}
                    placeholder='search contacts'
                    onChange={getValue} ref={input}
                />
                <i className='fas fa-search'></i>
            </div>
            <br />
            <br />

            {
                list.length === 0 ? (
                    <p> No contacts to display</p>
                ) : (
                    list
                )
            }
        </div>
    )

}



export default ContactList