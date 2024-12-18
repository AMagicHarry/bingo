import { Ticket } from "../../types/types";
import axios from "axios";

const baseUrl: string = import.meta.env.VITE_BACKEND_ENDPOINT

const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

export const fetchTicketsApi = async (token: string): Promise<any> => {
    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return await api.get(`${baseUrl}/ticket`, config)
}



export const fetchAssociationTicketsApi = async (token: string): Promise<any> => {
    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return await api.get(`${baseUrl}/ticket/association-tickets`, config)
}

export const getTicketApi = async ({ ticketId, token }: { ticketId: string, token: string }) => {
    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return await api.get(`${baseUrl}/ticket/${ticketId}`, config)
}

export const addTicketApi = async ({ ticket, token }: { ticket: Partial<Ticket>, token: string }): Promise<any> => {
    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return await api.post(`${baseUrl}/ticket`, ticket, config);
};

export const deleteTicketApi = async ({ ticketId, token }: { ticketId: string, token: string }): Promise<void> => {
    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return await api.delete(`${baseUrl}/ticket/${ticketId}`, config)
};

export const updateTicketApi = async ({ ticketId, updatedTicket, token }: { ticketId: string, updatedTicket: Partial<Ticket>, token: string }): Promise<void> => {
    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return await api.put(`${baseUrl}/ticket/${ticketId}`, updatedTicket, config)
};
