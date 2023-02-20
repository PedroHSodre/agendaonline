import Calendar from "../../components/calendar";
import MySchedule from "../../components/mySchedule";
import { Container } from "./styled";

export default function Home() {
    return (
        <Container>
            <MySchedule />
            <Calendar page="Home" />
        </Container>
    )
}