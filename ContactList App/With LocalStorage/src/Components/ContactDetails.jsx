import React from 'react'
import {Link, useLocation} from 'react-router-dom';



function ContactDetails() {

    const location = useLocation()
    const {name, email } = location.state

    const img = {
        width: '100%',
        height: '90%',
        objectFit: 'cover',
    }

    return (
        <div style={{ border: '1px solid red', textAlign: 'center'}}>
            <div style={{ width: '300px', height: '250px', margin: ' 10px auto',}}>

                <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" alt="" style={img} />
            </div>
            <br />

            <h3> {name} </h3>
            <p> {email} </p>

            <Link to='/'>
                <button className='btn btn-light'> Back to the List </button>
            </Link>
            <br />
            <br />
        </div>
    )
}


export default ContactDetails