import { useNavigate, Link } from 'react-router-dom';

function Home() {

    // useNavigate Hook with useLocation Hook
    const navigate = useNavigate()

    return (
        <div>
            <h1> Home Page </h1>
            <button
                onClick={()=> {
                    navigate('/about', {
                        state: 5000
                    })
                }}
            >
                Navigate to about page
            </button>
            <br />
            <br />


            {/* You can also pass info  with link */}
                <Link
                    to='/about'
                    state={'fffffff'}
                    style={{border: '2px solid black', padding: '5px', textDecoration: 'none' }}
                >
                    Go to About with state value
                </Link>
        </div>
    )
}

export default Home
