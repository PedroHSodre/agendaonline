import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    font-size: 32px;
    line-height: 42px;
    margin-top: 64px;
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
    margin-top: 8px; 
    width: 100%;  
    overflow-y: scroll;

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
    width: 75%;    
    margin: auto;
    height: 112px;
    background-color: ${props => props.theme.colors.NEUTRAL.DESATURATED_BLUE};
    border-radius: 50px;
    margin-bottom: 16px;
    padding: 24px;
    cursor: pointer;
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