import styled, { keyframes } from "styled-components";



// using Theme Provider
export const ThemeDark = styled.div`
    background-color: ${(props)=> props.theme.dark.primary};
    color: ${(props)=> props.theme.dark.text};
    padding: 10px;
`



export const ThemeLight = styled.div`
    margin: ${(props)=> props.theme.property.margin};
    border: 2px solid ${(props)=> props.theme.property.color};
    padding: 10px;
`


