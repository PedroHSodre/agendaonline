import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { 
    CreateClientBody, 
    IClientData, 
    ClientContextType, 
    UpdateClientBody 
} from "../../types/client";
import { 
    getUserClients 
} from "../../services/user";
import api from "../../configs/api";
import { 
    NavigateFunction 
} from "react-router-dom";
import { 
    toast 
} from "react-toastify";

const initialClientDetailState = {
    id: '',
    name: '',
    email: '',
    cellphone: '',
    uuid: '',
    userId: 0,
    document: '',
    address: '',
}

const ClientContext = createContext<ClientContextType>({
    clients: [],
    isLoading: false,
    clientDetail: initialClientDetailState
});

type Props = {
    children: JSX.Element
}

export const ClientProvider: React.FC<Props> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [clients, setClients] = useState<IClientData[]>([]);

    const [clientDetail, setClientDetail] = useState<IClientData>(initialClientDetailState);

    const getClients = useCallback(
        async () => {
            const data = await getUserClients();
            
            setClients(data?.data?.clients || [])
        }, 
        []
    );

    useEffect(() => {
        getClients()
    }, [getClients]);
    

    const createNewClient = async (data: CreateClientBody, navigate?: NavigateFunction) => {
        setIsLoading(true);
        try {
            const response = await api.post('/client/create', data);

            await getClients();

            toast.success(response.data.message);

            if(navigate) {
                navigate('/home');
            }
   

            setIsLoading(false);
        } catch(err: any) {
            const { message } = err?.response.data;

            setIsLoading(false);

            toast.error(message);
            
            throw new Error(message);
        }
    }

    const handleClientDetail = (
            shouldOpen: boolean, 
            data: IClientData, 
            navigate?: NavigateFunction
        ) => {
        if(shouldOpen) {
            setClientDetail(data);

            if(navigate) {
                navigate('/edit-client');
            }
        } else {
            setClientDetail(initialClientDetailState);
        }
    }

    const updateClient = async (data: UpdateClientBody, navigate?: NavigateFunction) => {
        setIsLoading(true);
        try {
            const response = await api.put('/client/update', data);

            await getClients();

            toast.success(response.data.message);
            
            if(navigate) {
                navigate('/home');
            }
   

            setIsLoading(false);
        } catch(err: any) {
            const { message } = err?.response.data;

            setIsLoading(false);

            toast.error(message);
            
            throw new Error(message);
        }
    }
    
    return (
        <ClientContext.Provider
            value={{
                isLoading,
                clients,
                createNewClient,
                updateClient,
                setClientDetail,
                clientDetail,
                handleClientDetail
            }}
        >
            {children}
        </ClientContext.Provider>
    )
}

export function useClient() {
    const context = useContext(ClientContext);
  
    return context;
  }