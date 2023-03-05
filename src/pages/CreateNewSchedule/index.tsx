import HeaderMenu from "../../components/headerMenu";
import MySchedule from "../../components/mySchedule";
import NewScheduleForm from "../../components/newScheduleForm";
import { Container, NewSchedulesContainer } from "./styled";

export default function CreateNewSchedule() {
    return (
        <Container>
            <MySchedule page="newSchedule"/>
            <NewSchedulesContainer>
                <HeaderMenu page="manageSchedules" />
                <NewScheduleForm />
            </NewSchedulesContainer>
        </Container>
    )
}