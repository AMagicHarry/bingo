import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, registerApi, logoutApi, refreshApi } from "../../../service/api/auth";
import { LoginForm,RegisterForm } from "../../../types/types";


export const login = createAsyncThunk(
    'auth/login',
    async (data:LoginForm, { rejectWithValue }) => {
        try {
            const response = await loginApi(data);
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (data:RegisterForm, { rejectWithValue }) => {
        try {
            const response = await registerApi(data);
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await logoutApi();
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue }) => {
        try {
            const response = await refreshApi();
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);
