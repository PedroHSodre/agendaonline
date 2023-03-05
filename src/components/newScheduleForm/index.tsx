import {useState} from 'react'
import { 
    Input as InputClean, 
    Btn as Button,
    Container, 
    Title 
} from "./styled";
import { CreateScheduleBody } from '../../types/schedule';
import { useSchedule } from '../../hooks/schedule';
import { useNavigate, useNavigation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { validateCreateScheduleFields } from '../../utils/schedule';

export default function NewScheduleForm() {
    const { createNewSchedule } = useSchedule();
    
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [cellphone, setCellphone] = useState('');

    const navigation = useNavigate()

    const handleSave = async () => {
        const data: CreateScheduleBody = {
            name, 
            data: new Date(date).toLocaleString('pt-BR').replace(',', ''), 
            cellphone
        }

        if (!createNewSchedule) 
            return toast.error('Não foi possivel salvar, tente novamente!');

        const dataIsValid = validateCreateScheduleFields(data);
        
        if(dataIsValid) 
            createNewSchedule(data, navigation);
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>, 
        setData: React.Dispatch<React.SetStateAction<string>>
    ) => {
        e.preventDefault();
        let value = e.target.value;

        setData(value);
    }

    return (
        <Container>
            <Title>Novo agendamento</Title>
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