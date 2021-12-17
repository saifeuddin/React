import React, { Component } from 'react'

export class MemeGenerator extends Component {

    constructor() {
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImage : "https://i.imgflip.com/1bij.jpg",
            allMemeImges : []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => {
            const {memes} = res.data
            console.log(memes)
            this.setState({ allMemeImges : memes })
        })
    }


    handleChange(e) {
        const {name, value} = e.target
        this.setState({ [name] : value })
    }


    handleSubmit(event) {
        event.preventDefault()
        const randomN = Math.floor(Math.random() * this.state.allMemeImges.length)
        const randMeme = this.state.allMemeImges[randomN].url

        this.setState({ randomImage : randMeme })
    }



    render() {
        return (
            <div className="div">
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        name="topText"
                        placeholder='Top Text'
                        value={this.state.topText}
                        onChange={this.handleChange.bind(this)}
                    />

                    <input
                        type="text"
                        name="bottomText"
                        placeholder='Bottom Text'
                        value={this.state.bottomText}
                        onChange={this.handleChange.bind(this)}
                    />

                    <button type='submit'>Gen</button>
                </form>

                <div className='meme'>
                    <img src={this.state.randomImage} alt="" />
                    <h2 className='top'> {this.state.topText} </h2>
                    <h2 className='bottom'> {this.state.bottomText} </h2>
                </div>
            </div>
        )
    }
}


export default MemeGenerator