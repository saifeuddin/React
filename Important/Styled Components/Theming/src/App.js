import React from 'react'
import { ThemeProvider } from 'styled-components'


import Button from './Components/Button'


function App() {

    const theme = {
        dark: {
            primary: '#000',
            text: '#fff'
        },

        property: {
            margin: '15px',
            color: '#000'
        }
    }



    return (
        <>
            <ThemeProvider theme={theme}>
                <Button />
            </ThemeProvider>
        </>
    )

}



export default App