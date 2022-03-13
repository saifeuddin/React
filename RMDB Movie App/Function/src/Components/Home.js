import React from 'react'
import useHomeFetch from '../Hooks/useHomeFetch';

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, } from '../config'
import NoImage from "../images/no_image.jpg";
import HeroImage from "./Hero"
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner'
import Search from './SearchBar'
import Button from './Button'




function Home() {

    const {
        cool, loading, error,
        searchTerm, setSearchTerm,
        setIsLoadingMore
    } = useHomeFetch()


    if(error) return <div> Some Wrong </div>


    return (
        <>
            {!searchTerm && cool.results[0] ? (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${cool.results[0].backdrop_path}` ?? NoImage}
                    title={cool.results[0].original_title}
                    text={cool.results[0].title}
                />)
            :
                null
            }

            <Search setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? 'Search Results':'Popular Movies'}>
                { cool.results.map((movie) => (
                    <Thumb key={movie.id}
                        clickable
                        image={
                            movie.poster_path ?
                            IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {cool.page < cool.total_pages && !loading && (
                <Button text='Load More' callback={()=> setIsLoadingMore(true)}/>
            )}
        </>
    )
}



export default Home