import { CreateClientBody } from "../types/client";
import { toast } from 'react-toastify';

export const validateCreateClientFields = (client: CreateClientBody) => {
    if(!client.name) {
        toast.error('Nome é obrigatório.')
        return false;
    }

    if(!client.address) {
        toast.error('Endereço é obrigatório.')
        return false;
    }

    if(!client.cellphone) {
        toast.error('Celular é obrigatório.')
        return false;
    }

    if(!client.document) {
        toast.error('CPF é obrigatório.')
        return false;
    }

    if(!client.email) {
        
        toast.error('Email é obrigatório.')
        return false;
    }

    return true;
}