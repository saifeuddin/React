import React, { useContext } from 'react'
import { Link } from 'react-router-dom';



import { Wrapper, Content, RMDBLogoImg, TMDBLogoImg } from './Styles'
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { Context } from '../../context';


function Header() {

    const [user] = useContext(Context);
    console.log(user)


    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <RMDBLogoImg src={RMDBLogo} alt="Rmdblogo" />
                </Link>
                {
                    user ? (
                        <span>
                            Logged in as : {user.username}
                        </span>
                    ) : (
                        <Link to='/login'>
                            <span> Log In </span>
                        </Link>
                    )
                }
                <TMDBLogoImg src={TMDBLogo} alt="Tmdblogo" />
            </Content>
        </Wrapper>
    )
}

export default Header
