import React from 'react'
import { Wrapper, Content, Text } from './Style'
import PropTypes from 'prop-types'



function HeroImage({image, title, text}) {

    return (
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1> {title} </h1>
                    <p> {text} </p>
                </Text>
            </Content>
        </Wrapper>
    )
}


HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default HeroImage
