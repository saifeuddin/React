import styled from 'styled-components'


export const Wrapper = styled.button`
    display: block;
    background-color: var(--darkGrey);
    color: var(--white);
    font-size: var(--fontBig);
    margin: 20px auto;
    height: 60px;
    width: 25%;
    min-width: 200px;
    border-radius: 10px;
    border: 0;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;

    :hover{
        opacity: 0.8;
    }
`




