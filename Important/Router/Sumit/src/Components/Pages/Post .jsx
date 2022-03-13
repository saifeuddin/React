import { useParams, useLocation } from 'react-router-dom';



function Post () {

    // useParams Hook
    const {id} = useParams()
    // useLocation Hook
    const query = new URLSearchParams(useLocation().search)



    return (
        <div>
            <h1> Post Id no : {id} </h1>
            <h2> {query.get('name')} </h2>
        </div>
    )
}

export default Post
