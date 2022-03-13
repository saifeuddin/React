import {useLocation} from 'react-router-dom';

function About() {

    // useLocation Hook with useNavigate Hook
    const location = useLocation()


    return (
        <div>
            <h1> This is About Page </h1>
            <b> {location.state} 1</b>
            <br />
            <b> {location.hash} 2</b>
            <br />
            <b> {location.key} 3</b>
            <br />
            <b> {location.pathname} 4</b>
            <br />
            <b> {location.search} 5</b>
        </div>
    )
}

export default About
