import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import API from '../../API'

import Thumb from '../Thumb'
import Rate from '../Rate'
import NoImage from '../../images/no_image.jpg'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'


import { Wrapper, Content, Text } from './styles'

import { Context } from '../../context'

function Info({ movie }) {
    console.log(movie)

    const [state] = useContext(Context)

    const handleRating = async (value) => {
        const rate = await API.rateMovie(state.sessionId, movie.id, value)
        console.log(rate)
    }



    return (
        <Wrapper backdrop={movie.backdrop_path} >
            <Content>
                <Thumb
                    image={
                        movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                    }
                    clickable={false}
                    alt='movie-thumb'
                />

                <Text>
                    <h1> {movie.title} </h1>
                    <h3> PLOT </h3>
                    <p className='o'> {movie.overview} </p>

                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">
                                {movie.vote_average}
                            </div>
                        </div>
                        {/* <div className="director">
                            <h3> DIRECTORS
                                {movie.directors.length> 1 ? 'S':''}
                            </h3>

                            {movie.directors.map( d => (
                                <p key={d.credit_id}> {d.name} </p>
                            ))}
                        </div> */}
                        <div className="date">
                            <h3> RELEASEDATE
                                <p>
                                    {movie.release_date}
                                </p>
                            </h3>
                        </div>
                    </div>

                    {state && (
                    <div>
                        <p> Rate Movie </p>
                        <Rate callback={handleRating} />
                    </div>
                    )}
                </Text>
            </Content>
        </Wrapper>
    )


}



Info.propTypes = {
    movie: PropTypes.object
}



export default Info