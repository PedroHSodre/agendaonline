import { useNavigate } from "react-router-dom";
import HeaderMenu from "../../components/headerMenu";
import MySchedule from "../../components/mySchedule";
import ScheduleList from "../../components/scheduleList";
import { Btn as Button,Container, SchedulesContainer } from "./styled";

export default function ManageSchedules() {
    const navigate = useNavigate();
    
    const handleCreateScheduleButton = () => {
        navigate('/add-schedule');
    }
    return (
        <Container>
            <MySchedule />
            <SchedulesContainer>
                <HeaderMenu page="manageSchedules" />
                <Button
                    text="Agendar"
                    onClick={handleCreateScheduleButton}
                />
                <ScheduleList />
            </SchedulesContainer>
        </Container>
    )
}