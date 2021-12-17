import React from 'react'

export const Footer = () => {

    let style ={
        position : "relative",
        width:'100%',
        top: '60vh',
        border:"2px solid red",
    }
    
    return (
        <footer className='bg-dark text-light py-3' style={style}>
            <p className="text-center">
                Copyright &copy; mytodolist.com
            </p>
        </footer>
    )
}
