import React, { Component } from 'react'


export class LifecycleB extends Component {
    constructor (props) {
        super(props)

        this.state = {
            name: 'Saife'
        }

        console.log('Lifecycle B constructor')
    }


    static getDerivedStateFromProps (props, state) {
        console.log('Lifecycle B getderivedstate')
        return null
    }


    componentDidMount () {
        console.log('Lifecycle B didmount')
    }



    render () {
        console.log('Lifecycle B render')


        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}



export default LifecycleB