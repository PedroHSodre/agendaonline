import styled from "styled-components";
import Button from "../button";

export const Container = styled.div`
    height: 100%;
    margin: 8px 8px 8px 0; 
    border-radius: 4px;
    border: solid 1px ${props => props.theme.colors.PRIMARY.LIGHT};
    overflow-y: auto;    /* Trigger vertical scroll    */
    overflow-x: hidden;
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
`

export const Table = styled.table`
    width: 100%;
    padding: 8px;
    thead {
        tr {
            th {
                color: white;    
                text-align: left;
            }
        }
    }
    tbody {
        tr {
            color: ${props => props.theme.colors.PRIMARY.LIGHT};    
            height: 30px;
        }
    }
`

export const Btn = styled(Button)`
    width: 75%;
    margin: auto;
`