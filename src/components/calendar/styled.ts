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
    margin: 16px 8px;

    .fc-scroller {
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 50px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme.colors.PRIMARY.LIGHT};
            border-radius: 20px;
        }
    }
`
