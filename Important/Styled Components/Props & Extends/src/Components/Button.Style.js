import styled from "styled-components";

// Using Props
export const StyledButtonwithProp = styled.button `
    background-color: ${(props) =>
        props.varient === 'outline'? 'yellow' : 'red'};
    padding: 10px;
`

// Using Extends 
export const StyledButtonwithExtends = styled(StyledButtonwithProp)`
    background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`