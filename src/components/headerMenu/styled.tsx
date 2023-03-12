import styled from "styled-components"

type MenuItemProps = {
    isThisPage?: boolean
}

export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 44px auto auto auto;
    background: ${props => props.theme.colors.NEUTRAL.DARK_BLUE};   
    height: 66px;
    border-radius: 8px;

    @media (max-width: 1200px) {
        display: none;
    }
`

export const HeaderMenuItem = styled.div<MenuItemProps>`
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 28px;
    color: ${props => props.isThisPage ? props.theme.colors.PRIMARY.LIGHT_RED : props.theme.colors.PRIMARY.LIGHT};

    @media (max-width: 1350px) {
        font-size: 1rem;
    }

    :hover {
        cursor: pointer;
        color: #FFBCBC;
    }
`