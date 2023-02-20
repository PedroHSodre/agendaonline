import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    background: ${props => props.theme.colors.PRIMARY.BLUE};
    height: 100vh;
    overflow: hidden;
`