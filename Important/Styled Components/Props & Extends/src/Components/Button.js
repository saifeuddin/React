import React from 'react'

// Styled Components
import { StyledButtonwithProp, StyledButtonwithExtends } from './Button.Style'



function Button() {


    return (
        <div>
            {/* Using Props */}
            <StyledButtonwithProp varient='outline' >
                This is a styled button using props
            </StyledButtonwithProp>
            <br />
            <br />

            {/* Using Extends */}
            <StyledButtonwithExtends >
                Button with style inheritance
            </StyledButtonwithExtends>
        </div>
    )
}



export default Button