import React from 'react'
import PropTypes from 'prop-types'


import { Wrapper, Image} from './styles'



function Actor ({ imageUrl, name, character }) {

    console.log( imageUrl, name, character )

    return (
        <Wrapper>
            <Image src={imageUrl} alt="actor-thumb" />
            <h3> {name} </h3>
            <h3> {character} </h3>
        </Wrapper>
    )
}

Actor.propTypes = {
    name : PropTypes.string,
    character : PropTypes.string,
    imageUrl : PropTypes.string,
}

export default Actor
