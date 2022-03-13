import React from 'react'

// Styled Components
import {
    ThemeDark,
    ThemeLight,
} from './Button.Style'



function Button() {


    return (
        <div>
            <ThemeDark>
                This is styled using Theme Provider
            </ThemeDark>
            <ThemeLight>
                This is styled using Theme Provider
            </ThemeLight>
        </div>
    )
}



export default Button