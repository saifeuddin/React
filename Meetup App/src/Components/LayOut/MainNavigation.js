import React from 'react'
import {Link} from 'react-router-dom'


import classes from './MainNavigation.module.css'
import FavouriteContext from '../../Store/Favorite-context'




function MainNavigation() {

    const favouritesCtx = React.useContext(FavouriteContext)



    return (
        <header className={classes.header}>
            <div>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> All Meetups </Link>
                    </li>
                    <li>
                        <Link to="/newmeetup"> Add New Meetup </Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            My Favourites
                            <span className={classes.badge}>
                                {favouritesCtx.totalFavourite}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default MainNavigation