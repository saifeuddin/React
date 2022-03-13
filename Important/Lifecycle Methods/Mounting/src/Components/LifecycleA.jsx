import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


export class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Saife'
        }

        console.log('Lifecycle A constructor')
    }


    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getderivedstate')
        return null
    }


    componentDidMount() {
        console.log('Lifecycle A didmount')
    }



    render() {
        console.log('Lifecycle A render')


        return (
            <div>
                Lifecycle A
                <LifecycleB />
            </div>
        )
    }
}



export default LifecycleA