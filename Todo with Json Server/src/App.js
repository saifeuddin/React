import React, { useState, useEffect } from 'react'
import Header from './componants/Header'
import Tasks from './componants/Tasks'
import AddTask from './componants/AddTask'
import Footer from './componants/Footer'
import About from './componants/About'
import {BrowserRouter as Router, Route } from 'react-router-dom'

function App () {

    useEffect(() => {
        const getTasks = async () => {
            const taskFromServer = await fetchTasks()
            setTasks(taskFromServer)
        }
        getTasks()
    }, [])



    const [show, setShow] = useState(false)
    const [tasks, setTasks] = useState([])


    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        console.log(data)

        return data
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        console.log(data)

        return data
    }


    const handleShow = () => {
        setShow(!show)
        console.log('Showed Input Feilds')
    }


    const handleDelete = async (id) => {
        await fetch(
            `http://localhost:5000/tasks/${id}`,
            {
                method: 'DELETE'
            }
        )
        setTasks(tasks.filter((t) => t.id !== id))
    }

    const remainder = async (id) => {
        console.log(id)
        const tasktoToggle = await fetchTask(id)
        const updTask = {...tasktoToggle, reminder: !tasktoToggle.reminder}

        const res = await fetch(
            `http://localhost:5000/tasks/${id}`,
            {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updTask)
            }
        )
        const data = await res.json()
        setTasks(
            tasks.map((t) => t.id === id ?
                { ...t, reminder: data.reminder } : t
            )
        )


        // setTasks(
        //     tasks.map((t) => t.id === id ?
        //         { ...t, reminder: !t.reminder } : t
        //     )
        // )
    }



    const addtask = async (task) => {
        const res = await fetch(
            'http://localhost:5000/tasks',
            {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(task)
            }
        )
        const data = await res.json()
        setTasks([...tasks, data])


        //withOut Server
            // let id = Math.floor(Math.random() * 10000) + 1
            // console.log(id)
            // const newTask = { id, ...task }
            // console.log(newTask)
            // setTasks([...tasks, newTask])
    }



    return (
        <Router>
            <div className='app'>
                <Header
                    title='Task Tracke'
                    show={handleShow}
                    close={show}
                />
                <br />
                <br />
                
                <Route path='/'
                    exact
                    render={( (props) => (
                        <>
                            {show && <AddTask onAdd={addtask} />}
                            {tasks.length > 0 ? (
                                <Tasks
                                    tasks={tasks}
                                    deleted={handleDelete}
                                    toggleRemainder={remainder}
                                />
                            ) : (
                                'No Task Available')
                            }
                        </>
                    ))}
                />
                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>

    )
}

export default App