import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

import { CreateScheduleBody, IScheduleData, ScheduleContextType, UpdateScheduleBody } from "../../types/schedule";
import { orderByDate } from "../../utils/date";
import { getSchedule, getScheduleOfToday } from "../../services/schedule";
import api from "../../configs/api";
import { NavigateFunction, Navigation } from "react-router-dom";
import { toast } from "react-toastify";

const initialScheduleDetailState = {
    cellphone: '',
    data: '',
    id: '',
    name: '',
    userUuid: '',
    uuid: ''
}

const ScheduleContext = createContext<ScheduleContextType>({
    allSchedule: [],
    scheduleOfToday: [],
    isLoading: false,
    scheduleDetail: initialScheduleDetailState
});

type Props = {
    children: JSX.Element
}

export const ScheduleProvider: React.FC<Props> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [scheduleOfToday, setScheduleOfToday] = useState<IScheduleData[]>([]);
    const [allSchedule, setAllSchedule] = useState<IScheduleData[]>([]);
    const [schedules, setSchedules] = useState<IScheduleData[]>([]);

    const [scheduleDetail, setScheduleDetail] = useState<IScheduleData>(initialScheduleDetailState);

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
            const response = await api.post('/schedule/create', data);

            await getSchedules();

            toast.success(response.data.message);

            if(navigate) {
                navigate('/home');
            }
   

            setIsLoading(false);
        } catch(err: any) {
            const { message } = err?.response.data;

            setIsLoading(false);

            toast.error(message);
            
            throw new Error(message);
        }
    }

    const handleScheduleDetail = (
            shouldOpen: boolean, 
            data: IScheduleData, 
            navigate?: NavigateFunction
        ) => {
        if(shouldOpen) {
            setScheduleDetail(data);

            if(navigate) {
                navigate('/edit-schedule');
            }
        } else {
            setScheduleDetail(initialScheduleDetailState);
        }
    }

    const updateSchedule = async (data: UpdateScheduleBody, navigate?: NavigateFunction) => {
        setIsLoading(true);
        try {
            const response = await api.put('/schedule/update', data);

            await getSchedules();

            toast.success(response.data.message);
            
            if(navigate) {
                navigate('/home');
            }
   

            setIsLoading(false);
        } catch(err: any) {
            const { message } = err?.response.data;

            setIsLoading(false);

            toast.error(message);
            
            throw new Error(message);
        }
    }
    
    return (
        <ScheduleContext.Provider
            value={{
                isLoading,
                scheduleOfToday,
                allSchedule,
                createNewSchedule,
                updateSchedule,
                setScheduleDetail,
                scheduleDetail,
                handleScheduleDetail
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