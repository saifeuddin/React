import React from 'react'
import Button from './Components/Button'


//  Styled Components
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: skyblue;
`




function App() {


    return (
        <>
            <StyledButton >
                Button
            </StyledButton>
            <br />
            <br />
            <Button />
        </>
    )
}



export default App