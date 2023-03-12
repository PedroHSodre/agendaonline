import { NavigateFunction } from "react-router-dom"

export type IClientData =  {
    id: string
    name: string
    email: string
    cellphone: string
    uuid: string
    userId: number
    document: string
    address: string
}

export type ClientContextType = {
    clients: IClientData[]
    isLoading: boolean
    createNewClient?: (data: CreateClientBody, navigate: NavigateFunction) => void
    updateClient?: (data: UpdateClientBody, navigate: NavigateFunction) => void
    setClientDetail?: React.Dispatch<React.SetStateAction<IClientData>>
    clientDetail: IClientData
    handleClientDetail?: (shouldOpen: boolean, data: IClientData, navigate: NavigateFunction) => void
}

export type CreateClientBody = {
    name: string
    email: string
    cellphone?: string
    document: string
    address: string
}

export type UpdateClientBody = CreateClientBody & {
    uuid: string
}