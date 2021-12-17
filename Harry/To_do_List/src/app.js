import React, {useState, useEffect} from "react";
import "./app.css";

import Header from './Components/header';
import {Todos} from './Components/todos';
import {AddTodo} from './Components/addtodo';
import {Footer} from './Components/footer';
import About from './Components/about';

import { BrowserRouter as Router,
    Switch,Route } from "react-router-dom"
function App (){
    let initTodo

    if(localStorage.getItem('todos') === null) {
        initTodo = []
        
    } else {
        initTodo = JSON.parse(localStorage.getItem('todos'))
    }

    const [todos, setTodos] = useState(initTodo);
    
    const addTodo = (title, desc)=> {
        console.log('I am adding this todo', title, desc)
        
        let sno
        if(todos.length === 0) {
            sno = 0
        } else {
            sno = todos[todos.length-1].sno + 1
        }

        const myTodo = {
            sno : sno,
            title: title,
            desc: desc
        }   
        setTodos([...todos, myTodo])
        console.log(myTodo)
    }

        useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(todos))
        }, [todos])



    const onDelete = (todo) => {
        console.log('I am on delete', todo)
    // This is not the method to remove item
        // let index = todo.indexOf(todo)
        // todos.splice(index, 1)
        
        setTodos(todos.filter((e) => {
            return e!==todo
        }))

        localStorage.setItem('todos', JSON.stringify(todos))
    }


    return(
        <>
        <Router>
            <Header title="My Todos List" searchBar={false} />

                <Switch>
                    <Route exact path="/" render={()=>{
                        return (
                            <>
                                <AddTodo addTodo={addTodo} />
                                <Todos todos={todos} onDelete={onDelete} />
                            </>
                        )
                    }}>
                    </Route>

                    <Route exact path = "/about" >
                        <About />
                    </Route>
                </Switch>

            <Footer />
        </Router>
        </>
    )
}

export default App  