import { NavigateFunction } from "react-router-dom"

export type IScheduleData =  {
    id: string
    name: string
    data: string
    cellphone: string
    uuid: string
}

export type IScheduleEvent = {
    title: string
    date: string
}

export type ScheduleContextType = {
    allSchedule: IScheduleData[]
    scheduleOfToday: IScheduleData[]
    isLoading: boolean
    createNewSchedule?: (data: CreateScheduleBody, navigate: NavigateFunction) => void
}

export type CreateScheduleBody = {
    name: string
    data: string
    cellphone?: string
}