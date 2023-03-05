import moment from "moment";
import api from "../configs/api";
import { IScheduleData } from "../types/schedule";

export const getSchedule = async () => {
    try {
        const response = await api.get('/schedule');

        return response
    } catch(err) {
        console.log(err);
    }
}

export const getScheduleOfToday = (schedule: IScheduleData[]) => schedule.filter(
    (item) => item.data.split(' ')[0] === moment().format('DD/MM/YYYY')
)