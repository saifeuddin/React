import React from 'react'

import Card from '../Ui/Card'
import classes from './MeetupItem.module.css'
import FavouriteContext from '../../Store/Favorite-context'



function MeetupItem({ title, address, img, description, id }) {


    const favouriteCtx = React.useContext(FavouriteContext)
    const itemFavourite = favouriteCtx.itemFavourite(id)



    const toggleFavouriteHandler = () => {
        if (itemFavourite) {
            favouriteCtx.removeFavourite(id)
        } else {
            favouriteCtx.addFavourite({
                id: id,
                title: title,
                image: img,
                description: description,
                address: address,
            })
        }
    }



    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={img} alt={title} />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={classes.actions} >
                    <button onClick={ toggleFavouriteHandler }>
                    {itemFavourite ? 'Remove From Favourites' : ' Add to favourites'}
                    </button>
                </div>
            </Card>
        </li>
    )
}



export default MeetupItem