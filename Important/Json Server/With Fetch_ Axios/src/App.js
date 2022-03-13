import React, {useState, useEffect} from 'react'
import axios from 'axios';


function App() {

    const [data, setData] = useState([
        {
            id: 1,
            name: 'Saife',
            email: 'uddin@gmailcom',
        }
    ])


    const fetchData = async ()=> {
            // with axios
        const res = await axios.get('http://localhost:5000/contacts')
        return res




            // with fetch() api
        // const res = await fetch('http://localhost:5000/contacts')
        // const data = await res.json()
        // return data
    }

    useEffect(() => {
        const get = async()=> {
            const res = await fetchData()

                // with axios
            console.warn(res)
            setData(res.data)



                // with fetch() api
            // console.warn(res)
            // setData(res)
        }

        get()

    }, [])





    return (
        <div>
            {
            data && data.map(e => {
                    return (
                        <div key={e.id}>
                            <h2> {e.name} </h2>
                            <p>
                                {e.email}
                            </p>
                        </div>
                    )
                })
            }
            <h1>dhhdhdhd</h1>
        </div>
    )
}

export default App