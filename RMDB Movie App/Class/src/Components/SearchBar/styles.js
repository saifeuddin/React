import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 20px;
    width: 70%;
`


export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    margin: 0 auto;
    background: var(--medGrey);
    color: var(--white);
    border-radius: 10px;

    img{
        position: absolute;
        left: 17px;
        top: 14px;
        width: 30px;


        @media screen and (max-width: 420px) {
            top: 14px;
            left: 13px;
            width: 29px;
        }

    }

    input[type='text']{
        font-size: 28px;
        position: absolute;
        left: 10px;
        margin: 8px auto;
        padding: 0 0 0 60px;
        border: 0;
        background: transparent;
        width: 85%;
        height: 40px;
        color: var(--white);



        :focus{
            outline: none;
        }


        @media screen and (max-width: 420px) {
        left: 0;
        font-size: 27px;
        font-weight: bolder;
    }
    }
`





