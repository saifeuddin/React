import React from 'react'
import { useSearchParams } from 'react-router-dom'



function Products() {

    // useSearchParams Hook
    const [searchParams, setSearchParams] = useSearchParams()
    const  showActiveUser = searchParams.get('filter') === 'active'


    return (
        <>
            <div>
                <h2>User 1</h2>
                <h2>User 2</h2>
                <h2>User 3</h2>
            </div>
            <div>
                <button onClick={()=> setSearchParams({ filter: 'active'})}>Active Users </button>
                <button onClick={()=> setSearchParams({})}> Reset Filter </button>
            </div>

            {
                showActiveUser? (
                    <h2>Showing Active Users</h2>
                ):(
                    <h2>Showing All Users</h2>
                )
            }
        </>
    )
}



export default Products