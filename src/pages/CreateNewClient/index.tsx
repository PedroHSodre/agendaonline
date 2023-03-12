import HeaderMenu from "../../components/headerMenu";
import MySchedule from "../../components/mySchedule";
import NewClientForm from "../../components/newClientForm";
import { Container, NewClientsContainer } from "./styled";

export default function CreateNewClient() {
    return (
        <Container>
            <MySchedule page="newClient"/>
            <NewClientsContainer>
                <HeaderMenu page="manageClients" />
                <NewClientForm />
            </NewClientsContainer>
        </Container>
    )
}