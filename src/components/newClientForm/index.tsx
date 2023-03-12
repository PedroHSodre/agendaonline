import {useState} from 'react'
import { 
    Input as InputClean, 
    Btn as Button,
    Container, 
    Title 
} from "./styled";
import { CreateClientBody } from '../../types/client';
import { useClient } from '../../hooks/client';
import { useNavigate, useNavigation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { validateCreateClientFields } from '../../utils/client';

export default function NewClientForm() {
    const { createNewClient } = useClient();
    
    const [name, setName] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [email, setEmail] = useState('');
    const [document, setDocument] = useState('');
    const [address, setAddress] = useState('');

    const navigation = useNavigate()

    const handleSave = async () => {
        const data: CreateClientBody = {
            name, 
            cellphone,
            email,
            document,
            address,
        }

        if (!createNewClient) 
            return toast.error('Não foi possivel salvar, tente novamente!');

        const dataIsValid = validateCreateClientFields(data);
        
        if(dataIsValid) 
            createNewClient(data, navigation);
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
            <Title>Novo cliente</Title>
            <form>
                <InputClean 
                    value={name}
                    data-testid="newClientName" 
                    label="Nome" 
                    onChange={(e) => handleChange(e, setName)}
                />
                <InputClean 
                    value={document}
                    data-testid="newClientDocument" 
                    label="CPF" 
                    onChange={(e) => handleChange(e, setDocument)}
                />
                <InputClean 
                    value={email}
                    data-testid="newClientEmail" 
                    label="E-mail" 
                    onChange={(e) => handleChange(e, setEmail)}
                />
                <InputClean 
                    value={cellphone}
                    data-testid="newClientCellphone" 
                    label="Celular" 
                    onChange={(e) => handleChange(e, setCellphone)}
                />
                <InputClean 
                    value={address}
                    data-testid="newClientAddress" 
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