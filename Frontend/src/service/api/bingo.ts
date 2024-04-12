import { Bingo } from "../../types/types";
import axios from "axios";

const baseUrl: string = import.meta.env.VITE_BACKEND_ENDPOINT

const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
  });


export const fetchBingosApi = async (token:string): Promise<any> => {
    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    return await api.get(`${baseUrl}/bingo`,config)
 }


export const fetchAssociationBingosApi = async (token:string): Promise<any> => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
    return await api.get(`${baseUrl}/bingo/association`,config)
 }

export const getBingoApi = async ({bingoId,token}:{bingoId:string,token:string}) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
    return await api.get(`${baseUrl}/bingo/${bingoId}`,config)
}

export const addBingoApi = async ({bingo,token}:{bingo:Partial<Bingo>,token:string}): Promise<any> => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  return await api.post(`${baseUrl}/bingo`, bingo,config);
};
 
export const deleteBingoApi = async ({bingoId,token}:{bingoId:string,token:string}): Promise<void> => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
   return await api.delete(`${baseUrl}/bingo/${bingoId}`,config)
 };


 

export const updateBingoApi = async ({ bingoId,updatedBingo,token}:{bingoId:string,updatedBingo: Partial<Bingo>,token:string}): Promise<void> => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  return await api.put(`${baseUrl}/bingo/${bingoId}`, updatedBingo,config)
};
