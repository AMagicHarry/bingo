import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBingosApi,getBingoApi,deleteBingoApi,updateBingoApi,addBingoApi,fetchAssociationBingosApi } from "../../../service/api/bingo";
import { Bingo } from "../../../types/types";


export const fetchBingos = createAsyncThunk(
    'bingo/fetchBingos',
    async (token:string, { rejectWithValue }) => {
        try {
            const response = await fetchBingosApi(token);
           
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const fetchAssociationBingos = createAsyncThunk(
    'bingo/fetchAssociationBingo',
    async (token:string, { rejectWithValue }) => {
        try {
            const response = await fetchAssociationBingosApi(token);
            console.log(response.data)
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);


export const getBingo = createAsyncThunk(
    'bingo/fetchBingo',
    async ({bingoId,token}:{bingoId:string,token:string}, { rejectWithValue }) => {
        try {
            const response = await getBingoApi({bingoId,token});
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const addBingo = createAsyncThunk(
    'bingo/add',
    async ({bingo,token}:{bingo: Partial<Bingo>,token:string}, { rejectWithValue }) => {
           console.log(bingo,token)
        try {
            const response = await addBingoApi({bingo,token});
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const deleteBingo = createAsyncThunk(
    'bingo/delete',
    async ({bingoId,token}:{bingoId:string,token:string}, { rejectWithValue }) => {
        try {
            await deleteBingoApi({bingoId,token});
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const updateBingo = createAsyncThunk(
    'bingo/update',
    async ({ bingoId, updatedBingo,token }: { bingoId: string, updatedBingo: Partial<Bingo>,token:string }, { rejectWithValue }) => {
        try {
            await updateBingoApi({bingoId, updatedBingo,token});
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);
