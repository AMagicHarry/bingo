import { createSlice } from "@reduxjs/toolkit";
import { AuthState,ApiStatus } from "../../../types/types";
import { login, logout, refresh, register } from "./thunk";
import Cookies from 'js-cookie'

const initialState: AuthState = {
    user: {
        _id: "",
        name: "",
        email: "" ,
        accesstoken:""
    },
    getLoginStatus: ApiStatus.ideal,
    getRegisterStatus: ApiStatus.ideal,
    getLogoutStatus: ApiStatus.ideal,
    getRefreshStatus: ApiStatus.ideal,
    loginError: '',
    registerError: '',
    logoutError: '',
    refreshError: '',
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuthStatus: (state) => {
            state.getLoginStatus = ApiStatus.ideal;
            state.getRegisterStatus = ApiStatus.ideal;
            state.getLogoutStatus = ApiStatus.ideal;
            state.getRefreshStatus = ApiStatus.ideal;
        },
        resetLoginError: (state) => {
            state.loginError = ''
        },
        resetRegisterError: (state) => {
            state.registerError = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.getRegisterStatus = ApiStatus.loading;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload;
                if(action.payload.accesstoken){
                    Cookies.set('bingo-tok', action.payload.accesstoken, {
                        expires: 30 / (24 * 60), // 30 minutes
                        secure: location.protocol === "https:",
                        sameSite: 'Strict',
                        httpOnly: false
                      });
                }
                state.getRegisterStatus = ApiStatus.success;
            })
            .addCase(register.rejected, (state,action) => {
                state.getRegisterStatus = ApiStatus.error;
                state.registerError = action.payload
            })


            .addCase(login.pending, (state) => {
                state.getLoginStatus = ApiStatus.loading;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload; 
                if(action.payload.accesstoken){
                    Cookies.set('bingo-tok', action.payload.accesstoken, {
                        expires: 30 / (24 * 60), // 30 minutes
                        secure: location.protocol === "https:",
                        sameSite: 'Strict',
                        httpOnly: false
                      });
                }
                state.getLoginStatus = ApiStatus.success;
            })
            .addCase(login.rejected, (state,action) => {
                state.getLoginStatus = ApiStatus.error;
                state.loginError = action.payload
            })


            .addCase(logout.pending, (state) => {
                state.getLogoutStatus = ApiStatus.loading;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = { _id: "", name: "", email: "",accesstoken:"" }; 
                Cookies.remove('bingo-tok');
                state.getLogoutStatus = ApiStatus.success;
            })
            .addCase(logout.rejected, (state,action) => {
                state.getLogoutStatus = ApiStatus.error;
                state.logoutError = action.payload
            })


            .addCase(refresh.pending, (state) => {
                state.getRefreshStatus = ApiStatus.loading;
            })
            .addCase(refresh.fulfilled, (state, action) => {
                state.user = action.payload; 
                if(action.payload.accesstoken){
                    Cookies.set('bingo-tok', action.payload.accesstoken, {
                        expires: 30 / (24 * 60),
                        secure: location.protocol === "https:",
                        sameSite: 'Strict',
                        httpOnly: false
                      });
                }
                state.getRefreshStatus = ApiStatus.success;
            })
            .addCase(refresh.rejected, (state,action) => {
                state.getRefreshStatus = ApiStatus.error;
                state.refreshError = action.payload
            });
    }
});

export const { resetAuthStatus,resetLoginError,resetRegisterError } = authSlice.actions;
export default authSlice.reducer;
