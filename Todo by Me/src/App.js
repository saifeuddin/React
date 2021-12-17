import React, { Component } from 'react'
import MemeGenerator from './componants/MemeGenerator'



export class App extends Component {

    state = {
        todos: [
            {
                id: 1,
                complete: false,
                title: 'Dinner with wife',
            },
            {
                id: 2,
                complete: false,
                title: 'Dinner with friends',
            },
            {
                id: 3,
                complete: false,
                title: 'Take out trash',
            },
        ],
        value : '',

    }


    chnaged = (id)=> {

        this.setState({ todos: this.state.todos.map( (todo)=> {
            if(todo.id === id) {
                todo.complete = !todo.complete
            }
            return todo
        }) })
    }


    clicked = (id)=> {
        this.state.todos.map( (todo) => {
                if(todo.complete) {
                    return this.setState({ todos: [...this.state.todos.filter( (todo)=> todo.id !== id)] })
                } else {
                    return null
                }
        })
    }


    hasChanged = (e)=> {
        let value = e.target.value
        this.setState({value : value})
        console.log(this.state)
    }

    keyCode = (e)=> {
        if(e.keyCode === 13 ) {
            this.added()
        }
    }

    added = (e)=> {
        if (this.state.value !== '') {
            let newValue = this.state.value
            console.log(newValue)
            let list = this.state.todos
            console.log(list)
            let length = this.state.todos.length
            list.push({ id: length + 1, complete: false, title: newValue })
            this.setState({ todos: list, value: '' })
            console.log(this.state.todos)
        } else {
            alert('Enter Your ToDo');
        }
    }


    render() {
        return (<>
            <MemeGenerator
                todos={this.state.todos}
                chnaged={this.chnaged}
                clicked={this.clicked}
            />
            <br />
            <br />
            <br />
            <div className='input'>
                <input type="text" value={this.state.value} placeholder="Enter Todo" onKeyDown={this.keyCode} onChange={this.hasChanged}/> {' '}
                <button onClick={this.added}> + </button>
            </div>
        </>)
    }
}


export default App