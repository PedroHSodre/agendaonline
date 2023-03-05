import axios from "axios";
import { API_URL } from "../utils/constants";

const api =  axios.create({
    baseURL: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    async (config) => {
      const altConfig = config;
      const token = localStorage.getItem('agenda::token');
      console.log('token', token)
      if (token) {
        altConfig.headers.Authorization = `Bearer ${token}`;
      }
    
      return altConfig;
    },
    (error) => {
      Promise.reject(error);
    },
  );

export default api;