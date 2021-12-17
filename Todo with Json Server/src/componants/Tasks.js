import React from 'react'
import Task from './Task'



function Tasks ({ tasks, deleted, toggleRemainder }) {

    return (
        <>
            {tasks.map( (t)=> {
                return (
                    <Task key={t.id} task={t}
                        deleted={deleted}
                        toggleRemainder={toggleRemainder}
                    />
                )
            })}
        </>
    )
}



export default Tasks