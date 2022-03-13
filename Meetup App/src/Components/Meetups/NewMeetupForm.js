import React, { useRef } from 'react'

import classes from './NewMeetupForm.module.css'

import Card from '../Ui/Card'


function NewMeetupForm(props) {

    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()



    const submitHandler = (e) => {
        console.log(e)
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;


        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        props.onAddMeetUp(meetupData)
        console.log(meetupData)
    }




    return (
        <Card>
            <form action="" className={classes.form} onSubmit={submitHandler} >
                <div className={classes.control}>
                    <label htmlFor = "title"> Meetup Title </label>
                    <input type="text" required id='title' ref={ titleInputRef }/>
                </div>
                <div className={classes.control}>
                    <label htmlFor = "image"> Meetup Image </label>
                    <input type="url" required id='image' ref={ imageInputRef }/>
                </div>
                <div className={classes.control}>
                    < label htmlFor="address"> Meetup Address </label>
                    <input type="text" required id='address' ref={ addressInputRef }/>
                </div>
                <div className={classes.control}>
                    <label htmlFor = "description"> Description </label>
                    <textarea name="description" id="description" rows="5" required ref={ descriptionInputRef }>
                    </textarea>
                </div>

                <div className={classes.actions}>
                    <button type='submit'>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}



export default NewMeetupForm