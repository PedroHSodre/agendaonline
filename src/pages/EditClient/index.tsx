import EditClientForm from "../../components/editClientForm";
import HeaderMenu from "../../components/headerMenu";
import MySchedule from "../../components/mySchedule";
import NewClientForm from "../../components/newClientForm";
import { Container, NewClientsContainer } from "./styled";

export default function EditClient() {
    return (
        <Container>
            <MySchedule page="newClient"/>
            <NewClientsContainer>
                <HeaderMenu page="manageClients" />
                <EditClientForm />
            </NewClientsContainer>
        </Container>
    )
}