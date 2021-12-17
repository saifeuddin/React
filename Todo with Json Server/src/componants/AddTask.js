import React, {useState} from 'react'


function AddTask({ onAdd }) {

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text || !day){
            alert('Please Add a Task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')



    return (
        <form className='add-form'
            onSubmit={onSubmit}
        >
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text"
                    autoFocus
                    placeholder='Add Task'
                    value={text}
                    onChange={(event)=> setText(event.target.value)}
                />
            </div>
            <div className="form-control second">
                <label htmlFor="">Day & Time</label>
                <input
                    type="text"
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control last">
                <label htmlFor="checked">Set Reminder</label>
                <input type="checkbox"
                    checked={reminder}
                    id='checked'
                    value={reminder}
                    onChange={(e) => setReminder(e.target.checked)}
                />
            </div>
            <input type="submit"
                value='Save Task'
                className='btn btn-block'
            />
        </form>
    )
}

export default AddTask
