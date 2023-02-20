import styled from "styled-components";

export const Container = styled.div`

`

export const Header = styled.div`

`

export const Title = styled.h1`
    text-align: center;
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    height: 84px;
    font-size: 4rem;
    line-height: 84px;

    color: ${props => props.theme.colors.PRIMARY.SOFT_BLUE};

    @media (max-width: 550px) {
        height: 64px;
        font-size: 2.5rem;
        line-height: 64px;
    }

    @media (max-width: 300px) {
        height: 64px;
        font-size: 1.5rem;
        line-height: 64px;
    }
`

export const Subtitle = styled.h3`
    height: 32px;
    text-align: center;
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 32px;
    color: ${props => props.theme.colors.PRIMARY.SOFT_BLUE};

    @media (max-width: 550px) {
        height: 24px;
        font-size: 1rem;
        line-height: 24px;
    }

    @media (max-width: 300px) {
        height: 24px;
        font-size: .5rem;
        line-height: 24px;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 46px;
`

export const ButtonContainer = styled.div`
    width: 50%;
    margin: auto;
`