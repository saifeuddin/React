import React from 'react'
import { FaTimes } from 'react-icons/fa'



function Task ({ task, deleted, toggleRemainder}) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={ ()=> toggleRemainder(task.id)}>
            <h3> {task.text}
                    <FaTimes className='icon'
                        onClick={ ()=> deleted(task.id)}
                    />
            </h3>
            <p> {task.day} </p>
            <hr />
        </div>
    )
}

export default Task

