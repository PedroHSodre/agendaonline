import api from "../configs/api";

export const getUserClients = async () => {
    try {
        const response = await api.get('/user/clients');

        return response
    } catch(err) {
        console.log(err);
    }
}