import React from 'react'

// Styled Components
import {
    StyledButtonPseudo,
} from './Button.Style'



function Button() {


    return (
        <div>
            <StyledButtonPseudo type='submit'>
                This is a styled button using Pseudo  classes and passing attributes
            </StyledButtonPseudo>
        </div>
    )
}



export default Button