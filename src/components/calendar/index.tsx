
import { useEffect, useState } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import ptBRLocale from '@fullcalendar/core/locales/pt-br';

import { CalendarContainer, Container } from "./styled";
import { IScheduleData, IScheduleEvent } from '../../types/schedule';
import { formatDateToAmericanDate, orderByDate } from '../../utils/date';
import HeaderMenu from '../headerMenu';
import { useSchedule } from '../../hooks/schedule';

export default function({ page }: { page:  string}) {
    const [events, setEvents] = useState<IScheduleEvent[]>([]);
    const { allSchedule } = useSchedule()

    useEffect(() => { 
        getData();
    }, []);
    
    const getData = async () => getEvent(orderByDate(allSchedule, 'asc'));

    const formatEvent = (schedule: IScheduleData[]) => schedule
        .map(item => (
            {
                title: item.name, 
                date: moment(formatDateToAmericanDate(item.data))
                        .format('YYYY-MM-DD HH:mm:ss')
            }
        ));

    const getEvent = (schedule: IScheduleData[]) => setEvents(formatEvent(schedule));

    return (
        <Container> 
            <HeaderMenu page={page} />
            <CalendarContainer>
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    locale={ptBRLocale}
                    events={events}
                    height="100%"
                />
            </CalendarContainer>
        </Container>
    )
}