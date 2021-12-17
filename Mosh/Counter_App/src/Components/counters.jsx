import React, { Component } from 'react'
import Counter from './counter'



export default class Counters extends Component {

    // // Properties
    // state = {
    //     counters: [
    //         {id: 1, value :1},
    //         {id: 2, value :0},
    //         {id: 3, value :0},
    //         {id: 4, value :0},
    //     ]
    // }


    
    // // Methods
    // handelIncrement = (counter) => {
        
    //     const counters = [...this.state.counters]
    //     const index = counters.indexOf(counter)
    //     counters[index] = {...counter}
    //     counters[index].value++
    //     this.setState({ counters: counters })
        
    //     console.log('increment', counter, index)
    // }




    // // Methods
    // handelReset = () => {
    //     console.log('Reset')
    //     const counters = this.state.counters.map(c => {
    //         c.value = 0
    //         return c
    //     })
        
    //     this.setState({ counters: counters })
    // }




    // // Methods
    // handelDecrement = (counterId) => {
    //     console.log('Deleted', counterId)
    //     const counters = this.state.counters.filter(c => c.id !== counterId)

    //     this.setState({ counters: counters })
    // }



    
    render() {
        
        console.log('Counters-Rendered')

        const {onReset, counter, onDelete, onIncrement } = this.props
        
        return (
            <div>
                <button 
                    onClick={onReset}
                    className='btn btn-primary btn-sm m-2'
                >
                    Reset
                </button>

                {counter.map(counter => 

                    <Counter 
                        key={counter.id} 
                        counter={counter}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                    >
                        {/* <h4> Counter #{counter.id}</h4> */}
                    </Counter>

                )}
            </div>
        )
    }
}
