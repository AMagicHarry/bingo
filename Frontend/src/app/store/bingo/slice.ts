import { createSlice } from "@reduxjs/toolkit";
import { fetchBingos,addBingo,deleteBingo,updateBingo,getBingo,fetchAssociationBingos } from "./thunk";
import { BingoState, ApiStatus } from "../../../types/types";

const initialState: BingoState = {
    bingos: [],
    associationBingos:[],
    bingo:{
        _id:"",
        gameDay: "",
        time: "",
        name:"",
        association: "",
        prices: "",
        startDate:"",
        endDate:"",
        donation: "",
        status: "",
        ticketPrice: "",
        createdAt:"",
    },

    getBingosStatus: ApiStatus.ideal,
    getAssociationBingoStatus:ApiStatus.ideal,
    getBingoStatus: ApiStatus.ideal,
    addBingoStatus: ApiStatus.ideal,
    deleteBingoStatus: ApiStatus.ideal,
    updateBingoStatus: ApiStatus.ideal,
    getAssociationBingoError:ApiStatus.ideal,
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
            state.getAssociationBingoStatus = ApiStatus.ideal;
            state.getBingosError = '';
            state.getAssociationBingoError = '',
            state.getBingoError = '';
            state.addBingoError = '';
            state.deleteBingoError = '';
            state.updateBingoError = '';
        },

        resetBingoEror:(state)=>{
           state.getBingoError = "",
           state.addBingoError = "",
           state.deleteBingoError ="",
           state.updateBingoError = ""
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch bingos
            .addCase(fetchBingos.pending, (state) => {
                state.getBingosStatus = ApiStatus.loading;
            })
            .addCase(fetchBingos.fulfilled, (state, action) => {
                state.bingos = action.payload;
                state.getBingosStatus = ApiStatus.success;
            })
            .addCase(fetchBingos.rejected, (state, action) => {
                state.getBingosStatus = ApiStatus.error;
                state.getBingosError = action.payload;
            })

            // Fetch Association bingos
            .addCase(fetchAssociationBingos.pending, (state) => {
                state.getAssociationBingoStatus = ApiStatus.loading;
            })
            .addCase(fetchAssociationBingos.fulfilled, (state, action) => {
                state.associationBingos = action.payload;
                state.getAssociationBingoStatus = ApiStatus.success;
            })
            .addCase(fetchAssociationBingos.rejected, (state, action) => {
                state.getAssociationBingoStatus = ApiStatus.error;
                state.getAssociationBingoError = action.payload;
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
                state.associationBingos.push(action.payload); 
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
                state.associationBingos = state.associationBingos.filter(bingo => bingo._id !== action.meta.arg.bingoId);
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
                const index = state.associationBingos.findIndex(bingo => bingo._id === action.meta.arg.bingoId);
                if (index !== -1) {
                    state.bingos[index] = { ...state.bingos[index], ...action.meta.arg.updatedBingo };
                }
                state.updateBingoStatus = ApiStatus.success;
            })
            .addCase(updateBingo.rejected, (state, action) => {
                state.updateBingoStatus = ApiStatus.error;
                state.updateBingoError = action.payload;
            });
    }
});

export const { resetBingoStatus,resetBingoEror } = bingoSlice.actions;
export default bingoSlice.reducer;
