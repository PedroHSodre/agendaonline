import { NavigateFunction } from "react-router-dom"

export type IScheduleData =  {
    id: string
    name: string
    data: string
    cellphone: string
    uuid: string
    userUuid: string
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
    updateSchedule?: (data: UpdateScheduleBody, navigate: NavigateFunction) => void
    setScheduleDetail?: React.Dispatch<React.SetStateAction<IScheduleData>>
    scheduleDetail: IScheduleData
    handleScheduleDetail?: (shouldOpen: boolean, data: IScheduleData, navigate: NavigateFunction) => void
}

export type CreateScheduleBody = {
    name: string
    data: string
    cellphone?: string
}

export type UpdateScheduleBody = CreateScheduleBody & {
    uuid: string
    userUuid: string
}