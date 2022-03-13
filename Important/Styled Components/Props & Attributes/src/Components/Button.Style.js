import styled from "styled-components";


// Pseudo Classes
export const StyledButtonPseudo = styled.button`
    background-color: red;
    padding: 10px;
    &:hover {
        background: white;
    }
`


// Set an Attributes
export const StyledButtonwithAttr = styled(StyledButtonPseudo).attrs({
    type: 'submit',
})`
    background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`


// Set an Attributes with Props
export const StyledButtonwithAttrProps = styled(StyledButtonPseudo).attrs((props)=> ({
    type: props.set === 'reset'? 'reset':'submit',
}))`
    background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`