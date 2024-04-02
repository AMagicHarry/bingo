import { createSlice } from "@reduxjs/toolkit";
import { fetchBingo,addBingo,deleteBingo,updateBingo,getBingo } from "./thunk";
import { BingoState, ApiStatus } from "../../../types/types";

const initialState: BingoState = {
    bingos: [],
    bingo:{
        _id:"",
        date: "",
        time: "",
        association: "",
        firstPrice: "",
        donation: "",
        status: "",
        ticketPrice: "",
    },

    getBingosStatus: ApiStatus.ideal,
    getBingoStatus: ApiStatus.ideal,
    addBingoStatus: ApiStatus.ideal,
    deleteBingoStatus: ApiStatus.ideal,
    updateBingoStatus: ApiStatus.ideal,
    getBingosError: '',
    getBingoError: '',
    addBingoError: '',
    deleteBingoError: '',
    updateBingoError: '',
};

const bingoSlice = createSlice({
    name: "bingo",
    initialState,
    reducers: {
        resetBingoStatus: (state) => {
            state.getBingosStatus = ApiStatus.ideal;
            state.getBingoStatus = ApiStatus.ideal;
            state.addBingoStatus = ApiStatus.ideal;
            state.deleteBingoStatus = ApiStatus.ideal;
            state.updateBingoStatus = ApiStatus.ideal;

            
            state.getBingosError = '';
            state.getBingoError = '';
            state.addBingoError = '';
            state.deleteBingoError = '';
            state.updateBingoError = '';
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch bingos
            .addCase(fetchBingo.pending, (state) => {
                state.getBingosStatus = ApiStatus.loading;
            })
            .addCase(fetchBingo.fulfilled, (state, action) => {
                state.bingos = action.payload;
                state.getBingosStatus = ApiStatus.success;
            })
            .addCase(fetchBingo.rejected, (state, action) => {
                state.getBingosStatus = ApiStatus.error;
                state.getBingosError = action.payload;
            })

            // Get single bingo
            .addCase(getBingo.pending, (state) => {
                state.getBingoStatus = ApiStatus.loading;
            })
            .addCase(getBingo.fulfilled, (state, action) => {
                 state.bingo = action.payload
                state.getBingoStatus = ApiStatus.success;
            })
            .addCase(getBingo.rejected, (state, action) => {
                state.getBingoStatus = ApiStatus.error;
                state.getBingoError = action.payload;
            })

            // Add bingo
            .addCase(addBingo.pending, (state) => {
                state.addBingoStatus = ApiStatus.loading;
            })
            .addCase(addBingo.fulfilled, (state, action) => {
                state.bingos.push(action.payload); 
                state.addBingoStatus = ApiStatus.success;
            })
            .addCase(addBingo.rejected, (state, action) => {
                state.addBingoStatus = ApiStatus.error;
                state.addBingoError = action.payload;
            })

            // Delete bingo
            .addCase(deleteBingo.pending, (state) => {
                state.deleteBingoStatus = ApiStatus.loading;
            })
            .addCase(deleteBingo.fulfilled, (state, action) => {
                state.bingos = state.bingos.filter(bingo => bingo._id !== action.meta.arg);
                state.deleteBingoStatus = ApiStatus.success;
            })
            .addCase(deleteBingo.rejected, (state, action) => {
                state.deleteBingoStatus = ApiStatus.error;
                state.deleteBingoError = action.payload;
            })

            // Update bingo
            .addCase(updateBingo.pending, (state) => {
                state.updateBingoStatus = ApiStatus.loading;
            })
            .addCase(updateBingo.fulfilled, (state, action) => {
                const index = state.bingos.findIndex(bingo => bingo._id === action.meta.arg.bingoId);
                if (index !== -1) {
                    state.bingos[index] = { ...state.bingos[index], ...action.meta.arg.data };
                }
                state.updateBingoStatus = ApiStatus.success;
            })
            .addCase(updateBingo.rejected, (state, action) => {
                state.updateBingoStatus = ApiStatus.error;
                state.updateBingoError = action.payload;
            });
    }
});

export const { resetBingoStatus } = bingoSlice.actions;
export default bingoSlice.reducer;
