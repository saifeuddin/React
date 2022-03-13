import styled, { keyframes } from "styled-components";



// Animation
const rotate = keyframes `
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`



export const Rotate = styled.div`
    background-color: red;
    padding: 10px;
    &:hover {
        background: white;
    }
    animation: ${rotate} 5s;
`

