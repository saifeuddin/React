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


    shouldComponentUpdate() {
        console.log('Lifecycle A shouldupdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log('Lifecycle A getSnapshot')
        return null
    }

    componentDidUpdate() {
        console.log('Lifecycle A didUpdate')
    }


    chnageState () {
        this.setState({
            name: 'Uddin'
        })
    }



    render() {
        console.log('Lifecycle A render')

        return (
            <div>
                Lifecycle A <br />
                <button onClick={this.chnageState.bind(this)}> Chnage state</button>
                <LifecycleB />
            </div>
        )
    }

}



export default LifecycleA