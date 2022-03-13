import React from 'react'
import './styles.css'
import ContactCard from './ContactCard'

function ContactList ({ contacts, remove }) {

    const styles = {
        textAlign: 'center'
    }

    const removehandler = (id) => {
        remove(id)
    }

    const list = contacts.map((c) => {
        return <ContactCard key={c.id} c={c} removehandler={removehandler} />
    })
    console.log(list)


    return (
        <div>
            <br />
            <h1 style={styles}> List of Contacts </h1>
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