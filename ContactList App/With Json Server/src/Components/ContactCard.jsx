import React from 'react'
import photo from '../Assets/man (1).png'
import { useNavigate, NavLink, } from 'react-router-dom';


function ContactCard ({ c, removehandler }) {

    const navigate = useNavigate()

    return (

        <div className='div' key={c.id}>
            <div onClick={() => {
                navigate(`/details/${c.id}`, { state: c })
            }}>
                <img src={photo} alt="" />
                <h3> {c.name} </h3>
            </div>
            <p> {c.email} </p>



            <i className='fas fa-trash-alt'
                onClick={() => removehandler(c.id)}
            >
            </i>
        </div>
    )

}


export default ContactCard