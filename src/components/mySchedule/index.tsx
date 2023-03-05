import moment from "moment";
import { BiEdit } from 'react-icons/bi';
import { 
    Container, 
    Header, 
    Label, 
    ListContainer, 
    Row, 
    ScheduleItem, 
    Subtitle, 
    Text, 
    Title,
    Btn as Button
} from './styled';
import { IScheduleData } from "../../types/schedule";
import { useSchedule } from "../../hooks/schedule";
import { useNavigate } from "react-router-dom";

export default function MySchedule({ page }: { page?: string}) {
    const { scheduleOfToday } = useSchedule()
    const handleEditItem = () => {};

    const navigate = useNavigate();

    const handleCreateScheduleButton = () => {
        navigate('/add-schedule');
    }
    console.log('scheduleOfToday', scheduleOfToday)
    return (
        <Container>
            <Header>
                <Title>Agenda Online</Title>
                <Subtitle>Agenda de Hoje</Subtitle>
                <Subtitle role="today_str">Dia: {moment().format('DD/MM/YYYY')}</Subtitle>
            </Header>
            <ListContainer>
                    {
                        scheduleOfToday.map((item: IScheduleData) => (
                            <ScheduleItem key={item.id} onClick={handleEditItem}>
                                <div>
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
                                </div>
                                <div>
                                    <BiEdit 
                                        size={32} 
                                        color="#D9D9D9" 
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {    }}
                                    />
                                </div>
                            </ScheduleItem>
                        ))
                    }
                {page != 'newSchedule' ? 
                    (
                        <div className="btn">
                            <Button
                                text="Agendar"
                                onClick={handleCreateScheduleButton}
                            />
                        </div> 
                    ) : null
                }
            </ListContainer>
        </Container>
    )
}