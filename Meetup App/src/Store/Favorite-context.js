import React, {useState, createContext} from 'react'


const FavouriteContext = createContext({
    favourites: [],
    totalFavourite: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemFavourite: (meetupId) => {},
})



export function FavoriteContextProvider( {children} ) {

    const [userFavourites, setUserFavourites] = useState([])


    function addFavouriteHandler (favouriteMeetup) {
        setUserFavourites( prev => {
            return prev.concat(favouriteMeetup)
        })
    }

    function removeFavouriteHandler (meetupId) {
        setUserFavourites(prev=> {
            return prev.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemFavouriteHandler (meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId)
    }



    const context = {
        favourites: userFavourites,
        totalFavourite: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemFavourite: itemFavouriteHandler,
    }



    return (
        <FavouriteContext.Provider value={context}>
            {children}
        </FavouriteContext.Provider>
    )
}


export default FavouriteContext