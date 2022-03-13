import React, { useState, useEffect } from 'react'

import MeetupList from '../Components/Meetups/MeetupList'



// const Dummy_Date = [
//     {
//         id: 1,
//         title: 'This is a first meetup',
//         // image: 'https://images.adsttc.com/media/images/5af9/bccd/f197/cc74/a100/000f/large_jpg/PGH_JB_EXTERIOR_0017.jpg?1526316218',
//         image: 'https://images.hdqwalls.com/wallpapers/purple-moon-stars-buildings-city-minimal-4k-gp.jpg',
//         address: '131, Dhnamondi, Dhaka Bangladesh',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptas Lorem ipsum dolor sit amet.'
//     },
//     {
//         id: 2,
//         title: 'This is a second meetup',
//         image: 'http://cdn.cnn.com/cnnnext/dam/assets/200211140555-09-dubai-buildings.jpg',
//         address: '131, Dhnamondi, Dhaka Bangladesh',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptas lorem Lorem ipsum dolor sit amet. '
//     },
// ]


const style = {
    textAlign: 'center',
    marginBottom: '50px',
}
const style1 = {
    'text-align': 'center',
    'margin-bottom': '50px',
}



function AllMeetUps() {

    const [loading, setLoading] = useState(true)
    const [loadMeetUps, setLoadMeetUps] = useState([])

    useEffect(() => {

        fetch('https://react-tuto-a20bf-default-rtdb.firebaseio.com/meetups.json')
        .then( (response) => response.json() )
        .then( data => {
            // console.log(data)
            const meetups = []

            for(const key in data) {

                const meetup  = {
                    id: key,
                    ...data[key],
                }
                meetups.push(meetup)
            }
            console.log(meetups)

            setLoading(false)
            setLoadMeetUps(meetups)
        })
    }, [])


    if(loading) {
        return(
            <section>
                <p> Loading............... </p>
            </section>
        )
    }


    return (
        <section>
            <h1 style={style || style1}> All Meet Ups</h1>
            <hr />
            <MeetupList meetups={loadMeetUps} />
        </section>
    )


}



export default AllMeetUps