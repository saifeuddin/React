import React from 'react'
import { useParams } from 'react-router-dom';


import { IMAGE_BASE_URL, POSTER_SIZE, } from '../config'
import NoImage from "../images/no_image.jpg";


import BreadCrumb from './BreadCrumb';
import { Spinner } from './Spinner/styles'
import Info from './MovieInfo';
import InfoBar from './InfoBar';
import Grid from './Grid'
import Actor from './Actor'

import API from '../API'





class Movie extends React.Component {

    state = {
        movie: {},
        loading: false,
        error: false,
    }


    fetchMovie = async () => {
        const { movieId } = this.props.params

        try {
            this.setState({ error: false, loading: true })

            const movie = await API.fetchMovie(movieId)
            const credits = await API.fetchCredits(movieId)

            const directors = credits.crew.filter(
                member => member.job === 'Director'
            )


            this.setState({
                movie: {
                    ...movie,
                    actors: credits.cast,
                    directors
                },
                loading: false
            })

        } catch (error) {
            this.setState({ error: true, loading: false })
        }
    }



    componentDidMount () {
        this.fetchMovie()
    }




    render() {
        const { movie, loading, error } = this.state


        if (loading) return <Spinner />
        if (error) return <div> Something went wrong </div>
        console.log(movie)

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
}



const MovieWithparams = (props) => <Movie {...props} params={useParams()} />




export default MovieWithparams