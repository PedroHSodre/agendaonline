import styled from "styled-components";
import Button from "../../components/button";

export const Container = styled.div`
    display: flex;
    flex: 1;
    background: ${props => props.theme.colors.PRIMARY.BLUE};
    height: 100vh;
    overflow: hidden;
`

export const SchedulesContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
`

export const Btn = styled(Button)`
    width: 25%;
    border-radius: 4px;
    margin-top: 8px;
`