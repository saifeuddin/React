import React, {useState, useEffect} from 'react'
import api from './Api'

function App() {

    const [data, setData] = useState([
        {
            id: 1,
            name: 'Saife',
            email: 'uddin@gmailcom',
        }
    ])
    console.log(data)

    useEffect(() => {
        fetchData()
    }, [])



    // GET, Fetch
    const fetchData = async ()=> {
            // with axios
        const res = await api.get('/contacts')
            .then(res => res.data)
            .then(data => setData(data))
            .catch(error => console.log(error))

        return res
    }

    // Post, Delete
    const deleteData = async ()=> {
        await api.delete('/contacts/6')
        setData(data.filter(d => {
            return d.id !== '6'
        }))
    }

    // Post, Add
    const addData = async ()=> {
        const res = await api.post('/contacts', {
            'id': '6',
            'name' : 'ekra',
            'email': 'ekra@gmail.com'
        })
        .then(res => res.data)
        console.log(res)
        setData([...data, res])
    }


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
            <button onClick={deleteData}>Click this to remove</button>
            <button onClick={addData}>Click this to add</button>
            <h1>dhhdhdhd</h1>
        </div>
    )
}

export default App