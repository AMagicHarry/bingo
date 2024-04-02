import { Bingo } from "../../types/types";
import axios from "axios";
import Cookies from 'js-cookie'

const baseUrl: string = 'https://bingo-backend-gamma.vercel.app/api';

const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${Cookies.get('bingo-tok')}`
      }
  });
  

export const fetchBingosApi = async (): Promise<any> => {
    return await api.get(`${baseUrl}/bingo`)
 }

export const getBingoApi = async (bingoId: string) => {
    return await api.get(`${baseUrl}/bingo/${bingoId}`)
}

export const addBingoApi = async (bingo: Partial<Bingo>): Promise<any> => {
  return await api.post(`${baseUrl}/bingo`, bingo);
};
 
export const deleteBingoApi = async (bingoId: string,): Promise<void> => {
   return await api.delete(`${baseUrl}/bingo/${bingoId}`)
 };
 
export const updateBingoApi = async (bingoId: string, updatedBingo: Partial<Bingo>): Promise<void> => {
  return await api.put(`${baseUrl}/bingo/${bingoId}`, updatedBingo)
};
