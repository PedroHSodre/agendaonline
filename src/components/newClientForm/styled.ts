import styled from "styled-components";
import InputClean from "../inputClean";
import Button from "../button";

export const Container = styled.div`
    height: 100%;
`

export const Title = styled.h3`
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    margin-top: 44px;
    color: ${props => props.theme.colors.PRIMARY.LIGHT};
    margin-bottom: 16px;
`

export const Label = styled.label`
    font-family: 'JetBrains Mono';
    font-size: 16px;
    color: ${props => props.theme.colors.PRIMARY.LIGHT};
`

export const Input = styled(InputClean)`
    width: 30%;
    margin-bottom: 24px;
`

export const Btn = styled(Button)`
    width: 30%;
`