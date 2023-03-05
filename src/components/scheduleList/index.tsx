import { BiEdit } from 'react-icons/bi';
import { useSchedule } from "../../hooks/schedule";
import {  Container, Table } from "./styled";
import theme from '../../styles/theme';

export default function ScheduleList() {
    const { allSchedule } = useSchedule();
    
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Horário</th>
                        <th>Celular</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allSchedule.map(item => (
                            <tr key={item.uuid}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.data}
                                </td>
                                <td style={{ color: item.cellphone ? theme.colors.PRIMARY.LIGHT : theme.colors.PRIMARY.LIGHT_RED }}>
                                    {item.cellphone ? item.cellphone : 'Não informado.'}
                                </td>
                                <td>
                                    <BiEdit 
                                        size={28} 
                                        color="#D9D9D9" 
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {    }}
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