import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBingosApi,getBingoApi,deleteBingoApi,updateBingoApi,addBingoApi } from "../../../service/api/bingo";
import { Bingo } from "../../../types/types";


export const fetchBingo = createAsyncThunk(
    'bingo/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchBingosApi();
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);


export const getBingo = createAsyncThunk(
    'bingo/fetch',
    async (bingoId:string, { rejectWithValue }) => {
        try {
            const response = await getBingoApi(bingoId);
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const addBingo = createAsyncThunk(
    'bingo/add',
    async (data: Partial<Bingo>, { rejectWithValue }) => {
        try {
            const response = await addBingoApi(data);
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const deleteBingo = createAsyncThunk(
    'bingo/delete',
    async (bingoId: string, { rejectWithValue }) => {
        try {
            await deleteBingoApi(bingoId);
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const updateBingo = createAsyncThunk(
    'bingo/update',
    async ({ bingoId, data }: { bingoId: string, data: Partial<Bingo> }, { rejectWithValue }) => {
        try {
            await updateBingoApi(bingoId, data);
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);
