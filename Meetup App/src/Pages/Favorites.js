import React from 'react'
import FavouriteContext from '../Store/Favorite-context'
import MeetupList from '../Components/Meetups/MeetupList'


function Favorites() {

    const favouriteCtx = React.useContext(FavouriteContext)

    let content
    if (favouriteCtx.totalFavourite === 0) {
        content = <p> You got no favourites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favouriteCtx.favourites} />
    }

    return (
        <section>
            <h1>My Favorites </h1>
            {content}
        </section>
    )
}

export default Favorites
