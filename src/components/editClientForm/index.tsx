import {useState} from 'react'
import { 
    Input as InputClean, 
    Btn as Button,
    Container, 
    Title 
} from "./styled";
import { UpdateClientBody } from '../../types/client';
import { useClient } from '../../hooks/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { validateCreateClientFields } from '../../utils/client';
import { formatDateToDateInput } from '../../utils/date';

export default function EditClientForm() {
    const { updateClient, clientDetail } = useClient();
    
    const [name, setName] = useState(clientDetail.name || '');
    const [cellphone, setCellphone] = useState(clientDetail.cellphone || '');
    const [email, setEmail] = useState(clientDetail.cellphone || '');
    const [address, setAddress] = useState(clientDetail.address || '');
    const [document, setDocument] = useState(clientDetail.document || '')

    const navigation = useNavigate();
    
    const handleSave = async () => {
        
        if(clientDetail.uuid) {

            const data: UpdateClientBody = {
                ...clientDetail,
                name, 
                cellphone,
                email,
                address
            }
    
            if (!updateClient) 
                return toast.error('Não foi possivel salvar, tente novamente!');
    
            const dataIsValid = validateCreateClientFields(data);
            
            if(dataIsValid) 
                updateClient(data, navigation);
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
            <Title>Editar cliente</Title>
            <form>
                <InputClean 
                    value={name}
                    data-testid="newClientName" 
                    label="Nome" 
                    onChange={(e) => handleChange(e, setName)}
                />
                <InputClean 
                    value={document}
                    data-testid="newClientName" 
                    label="CPF" 
                    onChange={(e) => handleChange(e, setDocument)}
                />
                <InputClean 
                    value={cellphone}
                    data-testid="newClientName" 
                    label="Celular" 
                    onChange={(e) => handleChange(e, setCellphone)}
                />
                
                <InputClean 
                    value={email}
                    data-testid="newClientName" 
                    label="E-mail" 
                    onChange={(e) => handleChange(e, setEmail)}
                />
                
                <InputClean 
                    value={address}
                    data-testid="newClientName" 
                    label="Endereço" 
                    onChange={(e) => handleChange(e, setAddress)}
                />
                <Button
                    text="Salvar"
                    onClick={handleSave}
                />
            </form>
        </Container>
    )
}