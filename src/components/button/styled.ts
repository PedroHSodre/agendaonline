import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Btn = styled.div`
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme.colors.NEUTRAL.VERY_DARK_BLUE};
    border-radius: 4px;
    color: #f5f5f5;
    border-color: transparent;
    cursor: pointer;

    :hover {
        border: #f5f5f5 1px solid;
    }
`