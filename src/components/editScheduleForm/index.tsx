import {useState} from 'react'
import { 
    Input as InputClean, 
    Btn as Button,
    Container, 
    Title 
} from "./styled";
import { CreateScheduleBody, UpdateScheduleBody } from '../../types/schedule';
import { useSchedule } from '../../hooks/schedule';
import { useNavigate, useNavigation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { validateCreateScheduleFields } from '../../utils/schedule';
import { formatDateToAmericanDate, formatDateToDateInput } from '../../utils/date';

export default function EditScheduleForm() {
    const { updateSchedule, scheduleDetail } = useSchedule();
    
    const [name, setName] = useState(scheduleDetail.name || '');
    const [date, setDate] = useState(formatDateToDateInput(scheduleDetail.data) || '');
    const [cellphone, setCellphone] = useState(scheduleDetail.cellphone || '');

    const navigation = useNavigate();
    
    const handleSave = async () => {
        
        if(scheduleDetail.uuid) {

            const data: UpdateScheduleBody = {
                ...scheduleDetail,
                name, 
                data: new Date(date).toLocaleString('pt-BR').replace(',', ''), 
                cellphone
            }
    
            if (!updateSchedule) 
                return toast.error('Não foi possivel salvar, tente novamente!');
    
            const dataIsValid = validateCreateScheduleFields(data);
            
            if(dataIsValid) 
                updateSchedule(data, navigation);
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>, 
        setData: React.Dispatch<React.SetStateAction<string>>
    ) => {
        e.preventDefault();
        let value = e.target.value;
        console.log('value', value)
        setData(value);
    }

    return (
        <Container>
            <Title>Editar agendamento</Title>
            <form>
                <InputClean 
                    value={name}
                    data-testid="newScheduleName" 
                    label="Nome" 
                    onChange={(e) => handleChange(e, setName)}
                />
                <InputClean 
                    value={date}
                    data-testid="newScheduleName" 
                    type="datetime-local"
                    label="Data" 
                    onChange={(e) => handleChange(e, setDate)}
                />
                <InputClean 
                    value={cellphone}
                    data-testid="newScheduleName" 
                    label="Celular" 
                    onChange={(e) => handleChange(e, setCellphone)}
                />
                <Button
                    text="Salvar"
                    onClick={handleSave}
                />
            </form>
        </Container>
    )
}