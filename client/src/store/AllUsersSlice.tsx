import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface userStateInter {
    loading: boolean;
    error: null | string;
    users: object[];
    type: string;
    isAuthenticated: boolean;
}
const initialState: userStateInter = {
    loading: false,
    error: null,
    type: "",
    isAuthenticated: false,
    users: [],
};

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/user/allUsers`);
        const users = response.data;
        return users
    } catch (err) {
       
        console.error(err);
    }
});

export const getUserSlice = createSlice({
    name: "allUsers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getAllUsers.fulfilled, (state, action:PayloadAction<any>) => {
            state.loading = false;
            state.error = null;
            state.users = action.payload

        })
        builder.addCase(getAllUsers.rejected, (state, action:PayloadAction<any>) => {
            state.error = JSON.stringify(action.payload);
            state.loading = false;
        });
    },
});

export default getUserSlice.reducer; // Export the reducer