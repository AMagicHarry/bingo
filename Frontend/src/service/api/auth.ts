import { LoginForm,RegisterForm } from '../../types/types';
import axios from 'axios'

const baseUrl: string = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const loginApi = async (user: LoginForm): Promise<any> => {
  return await api.post("/auth/login", user);
};

export const registerApi = async (user: RegisterForm): Promise<any> => {
  return await api.post("/auth/register", user);
};

export const logoutApi = async (): Promise<any> => {
  return await api.post("/auth/logout");
};

export const refreshApi = async (): Promise<any> => {
  return await api.post("/auth/refresh_token");
};
