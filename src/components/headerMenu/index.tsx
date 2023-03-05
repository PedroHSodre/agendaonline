import { HeaderMenu, HeaderMenuItem } from "./styled";
import { HeaderMenuProps } from "../../types/headerMenu";
import { useNavigate } from "react-router-dom";

export default function(props: HeaderMenuProps) {
    const { page } = props;

    const navigate = useNavigate();

    const handlePage = (page: string) => navigate(`/${page}`)

    return (
        <HeaderMenu>
            <HeaderMenuItem isThisPage={page == 'Home'} onClick={() => handlePage('home')}>
                Calendario
            </HeaderMenuItem>
            <HeaderMenuItem isThisPage={page == 'manageSchedules'} onClick={() => handlePage('manage-schedules')}>
                Gerenciar agendamentos
            </HeaderMenuItem>
            <HeaderMenuItem>
                Sair
            </HeaderMenuItem>
        </HeaderMenu>
    )
}