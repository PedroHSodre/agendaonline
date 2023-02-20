import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column; 
    height: 100%;

    .fc-toolbar-title {
       color: #DAFDBA;
       text-transform: capitalize;
    }

    .fc-view-harness {
        color: ${props => props.theme.colors.PRIMARY.LIGHT};
    }
`

export const CalendarContainer = styled.div`
    height: 100%;
    margin-top: 8px;
`