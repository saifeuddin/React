import React from 'react'

import {TodoItem} from "./todoitem";


export const Todos = (props) => {

    let myStyle = {
        minHeight : '70vh',
        margin: '110px auto',
    }



    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">Todos List</h3>

            {props.todos.length === 0? 'Sorry! No todos to dislay' :
                props.todos.map((todo) => {
                    return(
                        <>
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr />
                        </>
                    )
                })
            }
        </div>
    )
}


