import { CreateScheduleBody } from "../types/schedule";
import { toast } from 'react-toastify';

export const validateCreateScheduleFields = (schedule: CreateScheduleBody) => {
    if(!schedule.name) {
        toast.error('Nome é obrigatório.')
        return false;
    }

    if(!schedule.data || schedule.data === 'Invalid Date') {
        toast.error('Data invalida.')
        return false;
    }

    return true;
}