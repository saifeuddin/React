import React from 'react'
import API from '../API'



import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE, } from '../config'

import NoImage from "../images/no_image.jpg";
import HeroImage from "./Hero"
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner'
import Search from './SearchBar'
import Button from './Button'


const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
}

class Home extends React.Component {

    state = {
        movies: initialState,
        searchTerm: '',
        isLoadingMore: false,
        loading: false,
        error: false,
    }


    fetchMovies = async (page, searchTerm = '') => {

        try {
            this.setState({ error: false, loading: true })

            const movies = await API.fetchMovies(searchTerm, page)

            this.setState(prev => ({
                ...prev,
                movies: {
                    ...movies,
                    results:
                        page > 1 ? [...prev.movies.results, ...movies.results] : [...movies.results]
                },
                loading: false,
            }))

        } catch (error) {
            this.setState({ error: true, loading: false })
        }
    }




    handleSearch = searchTerm => {
        this.setState({ movies: initialState, searchTerm }, ()=> {
            this.fetchMovies(1, this.state.searchTerm)
        })
    }


    handleloadMore = () => {
        this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm)
    }


    componentDidMount() {
        this.fetchMovies(1)
    }


    render() {

        const { searchTerm, movies, loading, error } = this.state

        if (this.state.error) return <div> Some Wrong </div>

        return (
            <>
                {!searchTerm && movies.results[0] ? (
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}` ?? NoImage}
                        title={movies.results[0].original_title}
                        text={movies.results[0].title}
                    />)
                    :
                    null
                }

                <Search setSearchTerm={this.handleSearch} />

                <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                    {movies.results.map((movie) => (
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
                {movies.page < movies.total_pages && !loading && (
                    <Button text='Load More' callback={() => this.handleloadMore(true)} />
                )}
            </>
        )
    }


}



export default Home