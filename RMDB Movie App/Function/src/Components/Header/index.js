import React from 'react'
import { Link } from 'react-router-dom';



import { Wrapper, Content, RMDBLogoImg, TMDBLogoImg } from './Styles'
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'


function Header() {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <RMDBLogoImg src={RMDBLogo} alt="Rmdblogo" />
                </Link>
                <TMDBLogoImg src={TMDBLogo} alt="Tmdblogo" />
            </Content>
        </Wrapper>
    )
}

export default Header
