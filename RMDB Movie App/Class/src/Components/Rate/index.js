import React, { useState } from 'react'



function Rate({ callback }) {

    const [state, setstate] = useState(5)

    return (
        <div>
            <input
                type="range"
                min='1'
                max='10'
                value={state}
                onChange={ e => setstate(e.currentTarget.value) }
            />
            {state}
            <p>
                <button onClick={ ()=> callback(state) }>
                    Rate
                </button>
            </p>
        </div>
    )
}

export default Rate
