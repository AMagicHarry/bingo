import { createSlice } from "@reduxjs/toolkit";
import { AuthState,ApiStatus } from "../../../types/types";
import { login, logout, refresh, register,googleRegister,googleLogin,facebookAuth } from "./thunk";

const role:'association'|'player'|'admin' = 'association'
const initialState: AuthState = {
    user: {
        _id: "",
        name: "",
        email: "" ,
        accesstoken:"",
        role
    },
    getLoginStatus: ApiStatus.ideal,
    getRegisterStatus: ApiStatus.ideal,
    getLogoutStatus: ApiStatus.ideal,
    getRefreshStatus: ApiStatus.ideal,
    getGoogleRegisterAuthStatus: ApiStatus.ideal,
    getGoogleLoginAuthStatus: ApiStatus.ideal,
    getFacebookAuthStatus:ApiStatus.ideal,
    loginError: '',
    registerError: '',
    logoutError: '',
    refreshError: '',
    googleRegisterAuthError:"",
    googleLoginAuthError:"",
    facebookAuthError:""
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
            state.googleLoginAuthError = ''
        },
        resetRegisterError: (state) => {
            state.registerError = ''
            state.googleRegisterAuthError = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.getRegisterStatus = ApiStatus.loading;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload;
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
                state.user = { _id: "", name: "", email: "",accesstoken:"",role:"association" }; 
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
                state.getRefreshStatus = ApiStatus.success;
            })
            .addCase(refresh.rejected, (state,action) => {
                state.getRefreshStatus = ApiStatus.error;
                state.refreshError = action.payload
            })

            .addCase(googleRegister.pending, (state) => {
                state.getGoogleRegisterAuthStatus = ApiStatus.loading;
            })
            .addCase(googleRegister.fulfilled, (state, action) => {
                state.user = action.payload; 
                state.getGoogleRegisterAuthStatus = ApiStatus.success;
            })
            .addCase(googleRegister.rejected, (state,action) => {
                state.getGoogleRegisterAuthStatus = ApiStatus.error;
                state.googleRegisterAuthError = action.payload
            })

            .addCase(googleLogin.pending, (state) => {
                state.getGoogleLoginAuthStatus = ApiStatus.loading;
            })
            .addCase(googleLogin.fulfilled, (state, action) => {
                state.user = action.payload; 
                state.getGoogleLoginAuthStatus = ApiStatus.success;
            })
            .addCase(googleLogin.rejected, (state,action) => {
                state.getGoogleLoginAuthStatus = ApiStatus.error;
                state.googleLoginAuthError = action.payload
            })

            .addCase(facebookAuth.pending, (state) => {
                state.getFacebookAuthStatus = ApiStatus.loading;
            })
            .addCase(facebookAuth.fulfilled, (state, action) => {
                state.user = action.payload; 
                state.getFacebookAuthStatus = ApiStatus.success;
            })
            .addCase(facebookAuth.rejected, (state,action) => {
                state.getFacebookAuthStatus = ApiStatus.error;
                state.facebookAuthError = action.payload
            });
    }
});

export const { resetAuthStatus,resetLoginError,resetRegisterError } = authSlice.actions;
export default authSlice.reducer;
