import styled from 'styled-components'


export const Wrapper = styled.div`
    background-color: var(--darkGrey);
    padding: 0 20px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    color: var(--white);

    a{
        color: var(--white);
        text-decoration: none;
    }
`

export const RMDBLogoImg = styled.img`
    width: 300px;
    padding: 10px;
    @media screen and (max-width : 500px) {
        width: 150px;
    }

    :hover{
        opacity: .5;
        box-shadow: 2px 2px 2px 0 red;
    }
`

export const TMDBLogoImg = styled.img`
    width: 150px;
    @media screen and (max-width : 500px) {
        width: 80px;
    }
`


