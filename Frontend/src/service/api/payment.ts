// Assuming Payment type is similar in nature to Bingo, but for Payments
import { Payment } from "../../types/types";
import axios from "axios";

const baseUrl: string = import.meta.env.VITE_BACKEND_ENDPOINT;

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const fetchPaymentsApi = async (token: string): Promise<any> => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return await api.get(`${baseUrl}/payment`, config);
};

export const fetchAssociationPaymentsApi = async (token: string): Promise<any> => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return await api.get(`${baseUrl}/payment/association`, config);
};

export const getPaymentApi = async ({ paymentId, token }: { paymentId: string, token: string }) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return await api.get(`${baseUrl}/payment/${paymentId}`, config);
};

export const addPaymentApi = async ({ payment, token }: { payment: Partial<Payment>, token: string }): Promise<any> => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return await api.post(`${baseUrl}/payment`, payment, config);
};

export const deletePaymentApi = async ({ paymentId, token }: { paymentId: string, token: string }): Promise<void> => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return await api.delete(`${baseUrl}/payment/${paymentId}`, config);
};

export const updatePaymentApi = async ({ paymentId, updatedPayment, token }: { paymentId: string, updatedPayment: Partial<Payment>, token: string }): Promise<void> => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return await api.put(`${baseUrl}/payment/${paymentId}`, updatedPayment, config);
};
