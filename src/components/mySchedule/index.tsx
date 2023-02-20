import moment from "moment";
import agendaDoDia from "../../data/agendaDoDia";
import { 
    Container, 
    Header, 
    Label, 
    ListContainer, 
    Row, 
    ScheduleItem, 
    Subtitle, 
    Text, 
    Title 
} from './styled';
import { IScheduleData } from "../../types/schedule";
import { useEffect, useState } from "react";
import { orderByDate } from "../../utils/date";

export default function MySchedule() {
    const [scheduleOfToday, setScheduleOfToday] = useState<IScheduleData[]>([]);

    useEffect(() => {
        getData();
    }, []);

    const handleEditItem = () => {};

    const getData = () => setScheduleOfToday(orderByDate(agendaDoDia, 'asc'));

    return (
        <Container>
            <Header>
                <Title>Minha Agenda</Title>
                <Subtitle>Agenda do dia</Subtitle>
                <Subtitle>Dia: {moment().format('DD/MM/YYYY')}</Subtitle>
            </Header>
            <ListContainer>
                {
                    scheduleOfToday.map((item: IScheduleData) => (
                        <ScheduleItem key={item.id} onClick={handleEditItem}>
                            <Row>
                                <Label>Cliente: </Label>
                                <Text>
                                    {item.name}
                                </Text>
                            </Row>
                            <Row>
                                <Label>Horario: </Label>
                                <Text>
                                    {item.data}
                                </Text>
                            </Row>
                            <Row>
                                <Label>Celular: </Label>
                                <Text>
                                    {item.cellphone}
                                </Text>
                            </Row>
                        </ScheduleItem>
                    ))
                }
            </ListContainer>
        </Container>
    )
}