import React, { Component } from 'react'


export class MemeGenerator extends Component {

    render() {
        return (
            <div className="list">
                {this.props.todos.map((todo) => {
                    const { id, title, complete } = todo
                    return <div className='item' key={id}>
                        <input className="inpt" type="checkbox" onChange={this.props.chnaged.bind(this, id)} />
                        {' '}
                        <span style={complete ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}> {title} </span>
                        <button
                            className='button'
                            type="button"
                            onClick={this.props.clicked.bind(this, id)}
                        >
                            x
                        </button>
                        <hr />
                    </div>
                })}
            </div>
        )
    }
}

export default MemeGenerator
