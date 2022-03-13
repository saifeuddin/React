import styled from 'styled-components'


export const Wrapper = styled.div`
    background:
        linear-gradient(
            to bottom,
            rgba(0,0,0,0) 41%,
            rgba(0,0,0,65) 100%
        ),
        url(${({ image }) => image}) no-repeat;
    background-size: 100%, cover;
    background-position: center;
    height: 600px;
    position: relative;
    animation: animateHeroImage 1s;

    @keyframes  animateHeroImage{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`

export const Content = styled.div`
    padding: 200px;
    max-width: var(--maxWidth);
    margin: 0px auto;

`

export const Text = styled.div`
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: var(--white);

    @media screen and (max-width: 620px) {
        left: 130px;
    }

    @media screen and (max-width: 420px) {
        left: 30px;
    }


    h1{
        font-size: var(--fontSuperBig);

        @media screen and (max-width: 720px) {
            font-size: var(--fontBig);
        }
    }
    p{
        font-size: var(--fontMed);

        @media screen and (max-width: 720px) {
            font-size: var(--fontSmall);
        }
    }
`




