import EditScheduleForm from "../../components/editScheduleForm";
import HeaderMenu from "../../components/headerMenu";
import MySchedule from "../../components/mySchedule";
import NewScheduleForm from "../../components/newScheduleForm";
import { Container, NewSchedulesContainer } from "./styled";

export default function EditSchedule() {
    return (
        <Container>
            <MySchedule page="newSchedule"/>
            <NewSchedulesContainer>
                <HeaderMenu page="manageSchedules" />
                <EditScheduleForm />
            </NewSchedulesContainer>
        </Container>
    )
}