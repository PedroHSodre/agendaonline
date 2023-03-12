import { useNavigate } from "react-router-dom";

import HeaderMenu from "../../components/headerMenu";
import MySchedule from "../../components/mySchedule";
import ClientList from "../../components/clientList";

import { Btn as Button,Container, ClientsContainer } from "./styled";

export default function Clients() {
    const navigate = useNavigate();
    
    const handleCreateClientButton = () => {
        navigate('/create-client');
    }
    return (
        <Container>
            <MySchedule />
            <ClientsContainer>
                <HeaderMenu page="clients" />
                <Button
                    text="Novo cliente"
                    onClick={handleCreateClientButton}
                />
                <ClientList />
            </ClientsContainer>
        </Container>
    )
}