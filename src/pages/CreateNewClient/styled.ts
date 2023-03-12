import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    background: ${props => props.theme.colors.PRIMARY.BLUE};
    height: 100vh;
    overflow: hidden;
`

export const NewClientsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
`