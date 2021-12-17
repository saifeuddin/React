import axios from 'axios';
import React, {useState, useEffect} from 'react'
import PokimonList from "./PokimonList";
import Pagination from "./Pagination";



function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextUrl(res.data.next)
      setPrevUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return() => cancel()
  }, [currentUrl])



  if(loading) return 'Loading......'


  function goNextPage () {
    setCurrentUrl(nextUrl)
  }
  function goPrevPage () {
    setCurrentUrl(prevUrl)
  }



  return (
    <div>
      <PokimonList pokemon={pokemon}/>
      <Pagination
        gotoNextPage={ nextUrl? goNextPage : null}
        gotoPrevPage={ prevUrl? goPrevPage : null}
      />
    </div>
  )
}

export default App