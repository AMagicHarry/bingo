import axios from 'axios'

const baseUrl: string = import.meta.env.VITE_BACKEND_ENDPOINT

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const getWinnersApi = async (token:string): Promise<any> => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  return await api.get("/auth/winner",config);
};

