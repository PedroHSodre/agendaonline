import React from "react";
import { HeaderMenu, HeaderMenuItem } from "./styled";
import { HeaderMenuProps } from "../../types/headerMenu";

export default function(props: HeaderMenuProps) {
    const { page } = props;

    return (
        <HeaderMenu>
            <HeaderMenuItem isThisPage={page == 'Home'}>
                Calendario
            </HeaderMenuItem>
            <HeaderMenuItem isThisPage={page == 'manageSchedules'}>
                Gerenciar agendamentos
            </HeaderMenuItem>
            <HeaderMenuItem>
                Sair
            </HeaderMenuItem>
        </HeaderMenu>
    )
}