import { useState, useEffect, } from 'react'
import API from '../API'
import { isPresistedState } from '../helpers'




function useHomeFetch() {

    const initialState = {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
    }

    const [cool, setCool] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoadingMore, setIsLoadingMore] = useState(false)




    const fetchMovies = async (page, searchTerm= '') => {

        try {
            setError(false)
            setLoading(true)

            const movies = await API.fetchMovies(searchTerm, page)

            setCool(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        } catch (error) {
            setError(true)
        }

        setLoading(false)
    }




    // Initial and Search
    useEffect(() => {
        if(!searchTerm) {
            const sessionState = isPresistedState('HomeState')

            if(sessionState) {
                console.log("Grabbing from sessionStorage")
                setCool(sessionState)
                return
            }
        }

        console.log("Grabbing from Api")
        setCool(initialState)
        fetchMovies(1, searchTerm)
    }, [ searchTerm ])




    // Load More
    useEffect(() => {
        if(!isLoadingMore) return;

        fetchMovies(cool.page + 1, searchTerm)
        setIsLoadingMore(false)

    }, [isLoadingMore, searchTerm, cool.page])



    // write to sessionStorage
    useEffect(() => {

        if(!searchTerm) sessionStorage.setItem('HomeState', JSON.stringify(cool))
    }, [searchTerm, cool])


    return {
        cool, loading, error,
        searchTerm, setSearchTerm,
        setIsLoadingMore
    }
}


export default useHomeFetch