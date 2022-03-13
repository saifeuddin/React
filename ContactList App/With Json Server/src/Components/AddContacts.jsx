import React, { Component } from 'react'

export class AddContacts extends Component {

    state = {
        name: '',
        email: ''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    add = (e) => {
        e.preventDefault()

        if(this.state.name === '' && this.state.email === '') {
            alert('All the fields are mandatory!')
            return
        }
        this.props.addHandler(this.state)
        this.setState({name: '', email: ''})

        window.history.go(-1)
    }



    render () {

        return (
            <div>
                <h2>Add Contacts</h2>

                <form action="" className="form" onSubmit={ (e)=> this.add(e)} >
                    <div className="mb-3">
                        <label className='form-control' style={{ backgroundColor: 'rgb(162, 189, 211)' }}>Name</label>
                        <input
                            autoComplete= 'true' autoFocus= {true}
                            type="text" name='name' placeholder='Name'
                            className='form-control' value={this.state.name}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label className='form-control' style={{ backgroundColor: 'rgb(162, 189, 211)' }}>Email</label>
                        <input
                            autoComplete= 'true'
                            type="email" name='email' value={this.state.email}
                            placeholder='email' className='form-control'
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className='btn btn-primary' type='submit'>
                        Add Contacts
                    </button>
                </form>
            </div>
        )
    }


}



export default AddContacts