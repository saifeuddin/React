import React from 'react'


import NewMeetupForm from '../Components/Meetups/NewMeetupForm'



function NewMeetUp() {

    const addMeetUp = (meetupData)=> {
        fetch(
            'https://react-tuto-a20bf-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'Content-Type' : 'applicaton/json'
                }
            }
        )
        .then( ()=> {
            window.history.go(-1)
        })
    }




    return (
        <section>
            <h1>Add New MeetUp</h1>
            < NewMeetupForm onAddMeetUp={addMeetUp}/ >
        </section>
    )
}



export default NewMeetUp