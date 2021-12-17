import React, { Component } from 'react'
import "./app.css";
import Navbar from './Components/navbar';
import Counters from './Components/counters';





export default class app extends Component {


    // Properties
    state = {
        counters: [
            {id: 1, value :0},
            {id: 2, value :0},
            {id: 3, value :0},
            {id: 4, value :0},
        ]
    }



    //Constructor
    constructor(props) {
        super(props)
        // console.log("App- Constructed", this.props)
        console.log("App- Constructed")
    }
    
    
    componentDidMount() {
        // Ajax call
        console.log("App- Mounted")
    }
    
    
    
    
    
    // Methods
    handelIncrement = (counter) => {
        
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++
        this.setState({ counters: counters })
        
        console.log('increment', counter, index)
    }
    
    
    
    
    // Methods
    handelReset = () => {
        console.log('Reset')
        const counters = this.state.counters.map(c => {
            c.value = 0
            return c
        })
        
        this.setState({ counters: counters })
    }

    

    
    // Methods
    handelDecrement = (counterId) => {
        console.log('Deleted', counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId)
        
        this.setState({ counters: counters })
    }
    
    
    
    

    render () {
        
        console.log("App- Redered")
        
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter( (c)=> c.value > 0 ).length} />
                    <main className='container'>
                        <Counters 
                            counter={this.state.counters}
                            onIncrement={this.handelIncrement}
                            onDelete={this.handelDecrement}
                            onReset={this.handelReset}
                        />
                    </main>
            </React.Fragment>
        )
    }
}
