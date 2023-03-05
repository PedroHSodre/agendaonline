import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

import { CreateScheduleBody, IScheduleData, ScheduleContextType } from "../../types/schedule";
import { orderByDate } from "../../utils/date";
import { getSchedule, getScheduleOfToday } from "../../services/schedule";
import api from "../../configs/api";
import { NavigateFunction, Navigation } from "react-router-dom";

const ScheduleContext = createContext<ScheduleContextType>({
    allSchedule: [],
    scheduleOfToday: [],
    isLoading: false
});

type Props = {
    children: JSX.Element
}

export const ScheduleProvider: React.FC<Props> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [scheduleOfToday, setScheduleOfToday] = useState<IScheduleData[]>([]);
    const [allSchedule, setAllSchedule] = useState<IScheduleData[]>([]);
    const [schedules, setSchedules] = useState<IScheduleData[]>([]);

    const getSchedules = useCallback(
        async () => {
            const data = await getSchedule();

            setSchedules(data?.data || [])
        }, 
        []
    );

    useEffect(() => {
        getSchedules()
    }, [getSchedules]);

    const setScheduleOrdered = () => setScheduleOfToday(orderByDate(getScheduleOfToday(schedules), 'asc'));
    
    useEffect(() => {
        if(schedules) {
            setScheduleOrdered();
        }
    }, [schedules]);

    const getAllSchedules = () => setAllSchedule(orderByDate(schedules, 'asc'));

    useEffect(() => {
        if(schedules) {
            getAllSchedules()
        }
    }, [schedules]);

    const createNewSchedule = async (data: CreateScheduleBody, navigate?: NavigateFunction) => {
        setIsLoading(true);
        try {
            await api.post('/schedule/create', data);

            await getSchedules();

            if(navigate) {
                navigate('/home');
            }
   

            setIsLoading(false);
        } catch(err: any) {

            setIsLoading(false);

            throw new Error(err?.message)
        }
    }
    
    return (
        <ScheduleContext.Provider
            value={{
                isLoading,
                scheduleOfToday,
                allSchedule,
                createNewSchedule
            }}
        >
            {children}
        </ScheduleContext.Provider>
    )
}

export function useSchedule() {
    const context = useContext(ScheduleContext);
  
    return context;
  }