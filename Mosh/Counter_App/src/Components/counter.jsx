import React, { Component } from 'react'


export default class counter extends Component {


    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        
        if(prevProps.counter.value !== this.props.counter.value) {
            console.log('prevState', prevState)
        }
    }
    
    componentWillUnmount() {
        console.log("Counter-Unmounted")
    }


    // state = {
    //     value: this.props.counter.value,
    //     // tags: ['tag1', 'tag2', 'tag3']
    //     // tags: []
    // }



    // constructor() {
    //     super()
    //     console.log(this)
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }



    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'Zero' : value
    }


    getSpanClasses() {
        let classes = 'm-2 badge bg-'
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary'
        return classes
    }



    // renderTags() {
    //     if(this.state.tags.length === 0)
    //         return <p>There is no tags! </p>
    //         return <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li> )}</ul>
    // }




    //Function
    // handleIncrement = (product)=> {
    //     // console.log('Increment Clicked', this)
    //     console.log(product)


    // // Will not work
    //     // this.state.count++


    // // Will work
    //     this.setState({ value: this.state.value + 1})
    // }



    //Function
    // doHandleIncrement = ()=> {
        //     this.handleIncrement({ id:1})
        // }








    render() {
        // console.log('props', this.props)

        console.log('Counter-Rendered')

        return (
            <div>
                {/* {this.props.children} */}
                
                {/* {this.state.tags.length === 0 && 'Please create a new tag'}
                {this.renderTags()} */}



                <span className={this.getSpanClasses()}> 
                    { this.formatCount() } 
                </span> 
                {/* <button className="btn btn-secondary btn-sm" 
                    onClick={this.handleIncrement}> 
                        Increment 
                </button> */}

                <button className="btn btn-secondary btn-sm" 
                    onClick={ ()=> this.props.onIncrement(this.props.counter)}> 
                        ++ 
                </button>

                <button className="btn btn-danger btn-sm m-2" 
                    onClick={ ()=> this.props.onDelete(this.props.counter.id)}> 
                        --
                </button>

            </div>
        )
    }


}