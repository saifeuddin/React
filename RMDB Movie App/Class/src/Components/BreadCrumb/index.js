import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import { Wrapper, Content } from './styles'


function BreadCrumb ({ movieTitle }) {


    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <span className='span'> Home </span>
                </Link>
                    <span> | </span>
                    <span> {movieTitle} </span>
            </Content>
        </Wrapper>
    )
}

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string
}


export default BreadCrumb