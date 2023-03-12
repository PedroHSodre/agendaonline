import { BiEdit } from 'react-icons/bi';
import { useSchedule } from "../../hooks/schedule";
import {  Container, Table } from "./styled";
import theme from '../../styles/theme';
import { useNavigate } from 'react-router-dom';
import { IClientData } from '../../types/client';
import { toast } from 'react-toastify';
import { useClient } from '../../hooks/client';

export default function ClientList() {
    const { clients } = useClient();
    
    const navigate = useNavigate();

    const handleEditClient = (item: IClientData) => {
        if(!false) 
            return toast.error('Ocorreu um erro, tente novamente!')
    }

    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Celular</th>
                        <th>Documento</th>
                        <th>Endereço</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map(client => (
                            <tr key={client.uuid}>
                                <td>
                                    {client.name}
                                </td>
                                <td>
                                    {client.email}
                                </td>
                                <td style={{ color: client.cellphone ? theme.colors.PRIMARY.LIGHT : theme.colors.PRIMARY.LIGHT_RED }}>
                                    {client.cellphone ? client.cellphone : 'Não informado.'}
                                </td>
                                <td>
                                    {client.document}
                                </td>
                                <td>
                                    {client.address}
                                </td>
                                <td>
                                    <BiEdit 
                                        size={28} 
                                        color="#D9D9D9" 
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleEditClient(client)}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}