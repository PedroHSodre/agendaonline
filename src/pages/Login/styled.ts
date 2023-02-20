import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: ${props => props.theme.colors.PRIMARY.BLUE};
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`