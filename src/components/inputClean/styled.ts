import styled from "styled-components";

export const Container = styled.div`

`

export const Input = styled.input`
    box-sizing: border-box;

    width: 100%;
    height: 37px;
    background: transparent;
    color: ${props => props.theme.colors.PRIMARY.SOFT_BLUE};
    border: 1px solid #F5F5F5;
    border-radius: 25px;
    outline-color: transparent;
    text-align: left;
    padding-left: 16px;
`

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-family: 'JetBrains Mono';
    color: ${props => props.theme.colors.PRIMARY.SOFT_BLUE};
`