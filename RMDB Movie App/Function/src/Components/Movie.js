import React from 'react'


import { useParams } from 'react-router-dom';

import { IMAGE_BASE_URL, POSTER_SIZE, } from '../config'
import NoImage from "../images/no_image.jpg";


import BreadCrumb from './BreadCrumb';
import Grid from './Grid'
import {Spinner} from './Spinner/styles'
import Info from './MovieInfo';
import InfoBar from './InfoBar';
import Actor from './Actor'


import useMovieFetch from '../Hooks/useMovieFetch';





function Movie() {

    const { movieId } = useParams()
    const { state: movie, loading, error } = useMovieFetch(movieId)



    if(loading) return <Spinner />
    if(error) return <div> Something went wrong </div>



    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <br />
            <Info movie={movie} />
            <InfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <br />
            {/* <Grid header='Actors'>
                {movie.actors.map(a => (
                    <Actor
                        key={a.credit_id}
                        name={a.name}
                        character={a.character}
                        imageUrl={
                            a.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${a.profile_path}`
                            : NoImage
                        }
                    />
                ))}
            </Grid> */}
        </>
    )
}

export default Movie
