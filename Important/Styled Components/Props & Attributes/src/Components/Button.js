import React from 'react'

// Styled Components
import {
    StyledButtonPseudo,
    StyledButtonwithAttr,
    StyledButtonwithAttrProps
} from './Button.Style'



function Button() {


    return (
        <div>
            {/* Using Pseudo Classes */}
            {/*  Passing Attributes Normal Way*/}
            <StyledButtonPseudo type='submit'>
                This is a styled button using Pseudo  classes and passing attributes
            </StyledButtonPseudo>
            <br />
            <br />


            {/* Set Attributes with styled components */}
            <StyledButtonwithAttr>
                Button with style with attributes
            </StyledButtonwithAttr>
            <br />
            <br />


            <StyledButtonwithAttrProps set='reset'>
                Button with style Using attributes with props
            </StyledButtonwithAttrProps>
        </div>
    )
}



export default Button