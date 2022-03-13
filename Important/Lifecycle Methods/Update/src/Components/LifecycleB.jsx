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

    shouldComponentUpdate () {
        console.log('Lifecycle B shouldupdate')
        return true
    }

    getSnapshotBeforeUpdate (prevProp, prevState) {
        console.log('Lifecycle B getSnapshot')
        return null
    }

    componentDidUpdate () {
        console.log('Lifecycle B didUpdate')
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