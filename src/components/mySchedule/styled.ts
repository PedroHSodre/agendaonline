import styled from "styled-components";
import Button from "../button";

export const Container = styled.div`
    height: 100%;
    width: 448px;
`

export const Header = styled.header`    
    width: 75%;    
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
`

export const Title = styled.h2`
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    margin-top: 44px;
    color: ${props => props.theme.colors.PRIMARY.LIGHT};
`

export const Subtitle = styled.p`
    color: ${props => props.theme.colors.PRIMARY.LIGHT};
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin-top: 16px;
    line-height: 32px;   
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px; 
    height: 77.5%;
    width: 97%;  
    overflow-y: scroll;
    padding-bottom: 100px;
    position: relative;
    
    .btn {
        position: fixed;
        bottom: 16px;
        width: 325px;
    }

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.NEUTRAL.VERY_DARK_BLUE};
        border-radius: 20px;
    }
`

export const ScheduleItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;    
    height: 112px;
    background: ${props => props.theme.colors.NEUTRAL.DARK_BLUE};
    border-radius: 8px;
    margin-bottom: 16px;
    padding: 24px;
`

export const Label = styled.h4`
    color: #D9D9D9;
`

export const Text = styled.div`
    color: ${props => props.theme.colors.PRIMARY.SOFT_ORANGE};
    margin-left: 8px;  
`
export const Row = styled.div`
    display: flex;
    margin-bottom: 8px;
`
export const Btn = styled(Button)`
`