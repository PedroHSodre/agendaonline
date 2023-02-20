
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import ptBRLocale from '@fullcalendar/core/locales/pt-br';

import { CalendarContainer, Container } from "./styled";
import { IScheduleData, IScheduleEvent } from '../../types/schedule';
import agenda from '../../data/agenda';
import { formatDateToAmericanDate, orderByDate } from '../../utils/date';
import HeaderMenu from '../headerMenu';

export default function({ page }: { page:  string}) {
    const [events, setEvents] = useState<IScheduleEvent[]>([]);

    useEffect(() => { 
        getData();
    }, []);
    
    const getData = async () => getEvent(orderByDate(agenda, 'asc'));

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